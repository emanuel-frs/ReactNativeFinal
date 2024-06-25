import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerNavigationProp, DrawerScreenProps } from "@react-navigation/drawer";
import { View } from "react-native";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro/Cadastro";
import SobreNos from "../pages/SobreNos";
import HeaderCadastro from "../components/HeaderCadastro";
import HeaderHome from "../components/HeaderHome";
import HeaderSobreNos from "../components/HeaderSobreNos";
import HeaderJogoEspecifico from "../components/HeaderJogoEspecifico";
import JogoEspecifico from "../pages/JogoEspecifico";
import Edicao from "../pages/Edicao/Edicao";
import HeaderEdicao from "../components/HeaderEdicao";
import CustomDrawerContent from './customDrawerContent';

export type DrawerNavigation = {
    Home: undefined,
    JogoEspecifico: { id: number | string }
    Cadastro: undefined,
    SobreNos: undefined,
    Edicao: { id: number },
    Logout: undefined
}

export type DrawerTypes = DrawerNavigationProp<DrawerNavigation>;
export type HomeProps = DrawerScreenProps<DrawerNavigation, "Home">;
export type JogoEspecificoProps = DrawerScreenProps<DrawerNavigation, "JogoEspecifico">;
export type CadastroProps = DrawerScreenProps<DrawerNavigation, "Cadastro">;
export type SobreNosProps = DrawerScreenProps<DrawerNavigation, "SobreNos">;

const { Navigator, Screen } = createDrawerNavigator<DrawerNavigation>();

export default function DrawerComponent() {
    return (
        <Navigator 
            screenOptions={{
                drawerActiveTintColor: '#FDE251',
                drawerInactiveTintColor: '#FDE251',
                drawerActiveBackgroundColor: '#373A4D',
                drawerInactiveBackgroundColor: '#14151E',
                drawerStyle: {
                    backgroundColor: '#FDE251',
                    paddingHorizontal: 10,
                },
                drawerLabelStyle: {
                    fontFamily: 'Museo-Moderno-Medium',
                    fontSize: 16
                }
            }}
            initialRouteName="Home"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Screen
                name="Home"
                component={Home}
                options={{ header: () => <HeaderHome /> }}
            />
            <Screen
                name="SobreNos"
                component={SobreNos}
                options={{ header: () => <HeaderSobreNos /> }}
            />
            <Screen
                name="Cadastro"
                component={Cadastro}
                options={{ header: () => <HeaderCadastro /> }}
            />
            <Screen
                name="JogoEspecifico"
                component={JogoEspecifico}
                options={{
                    header: () => <HeaderJogoEspecifico />,
                    drawerItemStyle: { display: 'none' }
                }}
            />
            <Screen
                name="Edicao"
                component={Edicao}
                options={{
                    header: () => <HeaderEdicao />,
                    drawerItemStyle: { display: 'none' }
                }}
            />
        </Navigator>
    )
}
