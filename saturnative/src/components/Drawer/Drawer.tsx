import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import StackComponent from '../../routes/stack';

const Drawer = createDrawerNavigator();

export default function DrawerComponent() {
    return (
        <Drawer.Navigator initialRouteName="HomeStack">
            <Drawer.Screen name="HomeStack" component={StackComponent} options={{ title: 'Home' }} />
            <Drawer.Screen name="AnotherScreen" component={StackComponent} options={{ title: 'Cadastro' }} />
        </Drawer.Navigator>
    );
}

