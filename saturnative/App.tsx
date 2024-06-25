import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from 'expo-splash-screen';
import StackComponent from './src/routes/stack';
import { Splash } from "./src/components/Splash/SplashScreen";
import { useFonts } from 'expo-font';
import { UserProvider } from "./src/contexts/UserContext";
import { RefreshProvider } from './src/contexts/RefreshContext';
import Routes from "./src/routes";

export default function App() {
  const [isSplashComplete, setIsSplashComplete] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    'Museo-Medium': require('./assets/fonts/MuseoModerno-ExtraLight.ttf'),
    'Museo-Moderno-Medium': require('./assets/fonts/MuseoModerno-Medium.ttf'),
    'Museo-Moderno-Regular': require('./assets/fonts/MuseoModerno-Regular.ttf'),
    'Museo-Moderno-SemiBold': require('./assets/fonts/MuseoModerno-SemiBold.ttf'),
    'Museo-Moderno-Bold': require('./assets/fonts/MuseoModerno-Bold.ttf'),
    'Museo-Moderno-Italic': require('./assets/fonts/MuseoModerno-Italic.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && !fontError) {
      try {
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  const handleComplete = useCallback(() => {
    setIsSplashComplete(true);
  }, []);

  if (!fontsLoaded || fontError || !isSplashComplete) {
    return <Splash onComplete={handleComplete} />;
  }

  return (
    <UserProvider>
      <RefreshProvider>
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
      </RefreshProvider>
    </UserProvider>
  );
}
