import { createStackNavigator } from "@react-navigation/stack"
import Login from "../pages/Login";
import JogoEspecifico from "../pages/JogoEspecifico";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import HeaderJogoEspecifico from "../components/HeaderJogoEspecifico";
import Edicao from "../pages/Edicao/Edicao";
import Cadastro from "../pages/Cadastro/Cadastro";
import DrawerComponent from "./drawer";
import HeaderEdicao from "../components/HeaderEdicao";

type StackNavigation = {
    Drawer: undefined,
    JogoEspecifico: { id: number }
    Login: undefined,
    Edicao: { id: number | string },
    Cadastro: undefined,
    SobreNos: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type HomeProps = NativeStackScreenProps<StackNavigation, "Drawer">;
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
                name="Drawer"
                component={DrawerComponent}
                options={{headerShown:(false)}}
            />
            <Screen
                name="Login"
                component={Login}
                options={{headerShown:(false)}}
            />
            <Screen
                name="JogoEspecifico"
                component={JogoEspecifico}
                options={{header: () => <HeaderJogoEspecifico/>}}
            />
            <Screen
                name="Edicao"
                component={Edicao}
                options={{header: () => <HeaderEdicao/>}}
            />
            <Screen
                name="Cadastro"
                component={Cadastro}
                options={{headerShown:(false)}}
            />
            <Screen
                name="SobreNos"
                component={DrawerComponent}
                options={{headerShown:(false)}}
            />
        </Navigator>
    )
}