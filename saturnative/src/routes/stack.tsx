import { createStackNavigator } from "@react-navigation/stack"
import Home from "../pages/Home";
import JogoEspecifico from "../pages/JogoEspecifico";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import HeaderJogoEspecifico from "../components/HeaderJogoEspecifico";

type StackNavigation = {
    Home: undefined,
    JogoEspecifico: { id: number }
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type HomeProps = NativeStackScreenProps<StackNavigation, "Home">;
export type JogoEspecificoProps = NativeStackScreenProps<StackNavigation, "JogoEspecifico">;

const { Navigator, Screen } = createStackNavigator<StackNavigation>();

export default function StackComponent() {
    return(
        <Navigator initialRouteName="Home">
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