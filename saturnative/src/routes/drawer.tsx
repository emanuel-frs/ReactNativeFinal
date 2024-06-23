import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { DrawerNavigationProp, DrawerScreenProps } from "@react-navigation/drawer";
import Cadastro from "../pages/Cadastro/Cadastro";
import SobreNos from "../pages/SobreNos";
import { StyleSheet } from "react-native";
import HeaderCadastro from "../components/HeaderCadastro";
import HeaderHome from "../components/HeaderHome";
import HeaderSobreNos from "../components/HeaderSobreNos";

export type DrawerNavigation = {
    Home: undefined,
    JogoEspecifico: { id: number }
    Login: undefined,
    Edicao: undefined,
    Cadastro: undefined,
    SobreNos: undefined,
    Sair: undefined
}

export type DrawerTypes = DrawerNavigationProp<DrawerNavigation>;
export type HomeProps = DrawerScreenProps<DrawerNavigation, "Home">;
export type JogoEspecificoProps = DrawerScreenProps<DrawerNavigation, "JogoEspecifico">;
export type ScreenLogin = DrawerScreenProps<DrawerNavigation, "Login">;
export type EdicaoProps = DrawerScreenProps<DrawerNavigation, "Edicao">;
export type CadastroProps = DrawerScreenProps<DrawerNavigation, "Cadastro">;
export type SobreNosProps = DrawerScreenProps<DrawerNavigation, "SobreNos">;

const { Navigator, Screen } = createDrawerNavigator<DrawerNavigation>();

export default function DrawerComponent() {
    return(
        <Navigator screenOptions={{drawerActiveTintColor: '#FDE251',
            drawerInactiveTintColor: '#FDE251',
            drawerActiveBackgroundColor: '#373A4D',
            drawerInactiveBackgroundColor: '#14151E',
            drawerStyle:{
            backgroundColor: '#FDE251',
            paddingHorizontal: 10,
            },
        }}
        initialRouteName="Home">
            <Screen
                name="Home"
                component={Home}
                options={{header: () => <HeaderHome/>}}
                
            />
            <Screen 
                name="SobreNos"
                component={SobreNos}
                options={{header: () => <HeaderSobreNos/>}}
            />
            <Screen
                name="Cadastro"
                component={Cadastro}
                options={{header: () => <HeaderCadastro/>}}
            />
            <Screen
                name="Sair"
                component={Login}
                options={{headerShown:(false)}}
            />
        </Navigator>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black'
    }
})