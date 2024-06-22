import { createStackNavigator } from "@react-navigation/stack"
import Home from "../pages/Home";
import Login from "../pages/Login";
import JogoEspecifico from "../pages/JogoEspecifico";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import HeaderJogoEspecifico from "../components/HeaderJogoEspecifico";
import Edicao from "../pages/Edicao/Edicao";
import Cadastro from "../pages/Cadastro/Cadastro";
import SobreNos from "../pages/SobreNos";

type StackNavigation = {
    Home: undefined,
    JogoEspecifico: { id: number }
    Login: undefined,
    Edicao: undefined,
    Cadastro: undefined,
    SobreNos: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type HomeProps = NativeStackScreenProps<StackNavigation, "Home">;
export type JogoEspecificoProps = NativeStackScreenProps<StackNavigation, "JogoEspecifico">;
export type ScreenLogin = NativeStackScreenProps<StackNavigation, "Login">;
export type EdicaoProps = NativeStackScreenProps<StackNavigation, "Edicao">;
export type CadastroProps = NativeStackScreenProps<StackNavigation, "Cadastro">;
export type SobreNosProps = NativeStackScreenProps<StackNavigation, "SobreNos">;

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
            <Screen
                name="Edicao"
                component={Edicao}
                options={{headerShown:(false)}}
            />
            <Screen
                name="Cadastro"
                component={Cadastro}
                options={{headerShown:(false)}}
            />
            <Screen
                name="SobreNos"
                component={SobreNos}
                options={{headerShown:(false)}}
            />
        </Navigator>
    )
}