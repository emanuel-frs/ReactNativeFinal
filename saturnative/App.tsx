import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from 'expo-splash-screen';
import StackComponent from './src/routes/stack';
import { Splash } from "./src/components/Splash/SplashScreen";
import DrawerComponent from "./src/components/Drawer/Drawer";

export default function App() {
  const [isSplashComplete, setIsSplashComplete] = useState(false);

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

  const handleComplete = () => {
    setIsSplashComplete(true);
    SplashScreen.hideAsync();
  };

  if (!isSplashComplete) {
    return <Splash onComplete={handleComplete} />;
  }

  return (
    <NavigationContainer>
      <StackComponent />
    </NavigationContainer>
  );
}
