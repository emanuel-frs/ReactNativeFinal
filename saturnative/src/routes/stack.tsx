import { createStackNavigator } from "@react-navigation/stack"
import Home from "../pages/Home";
import Login from "../pages/Login";
import JogoEspecifico from "../pages/JogoEspecifico";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import HeaderJogoEspecifico from "../components/HeaderJogoEspecifico";

type StackNavigation = {
    Home: undefined,
    JogoEspecifico: { id: number }
    Login: undefined,
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type HomeProps = NativeStackScreenProps<StackNavigation, "Home">;
export type JogoEspecificoProps = NativeStackScreenProps<StackNavigation, "JogoEspecifico">;
export type ScreenLogin = NativeStackScreenProps<StackNavigation, "Login">;

const { Navigator, Screen } = createStackNavigator<StackNavigation>();

export default function StackComponent() {
    return(
        <Navigator initialRouteName="Login">
            <Screen
                name="Login"
                component={Login}
                options={{headerShown:(false)}}
            />
            <Screen
                name="Home"
                component={Home}
                options={{title: "Home"}}
            />
            <Screen
                name="JogoEspecifico"
                component={JogoEspecifico}
                options={{header: () => <HeaderJogoEspecifico/>}}
            />
        </Navigator>
    )
}