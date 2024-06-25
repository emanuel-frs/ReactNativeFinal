// CustomDrawerContent.tsx
import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { UserContext, UserContextType } from '../contexts/UserContext';
import { StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function CustomDrawerContent(props : any) {
  const { setEstaLogado } = useContext(UserContext) as UserContextType;
  const limpaStorage = async () => {
      try{
          SecureStore.deleteItemAsync('user')
      } catch (err) {
          console.log(err);
      }
  }

  const handleLogout = () => {
      setEstaLogado(false);
      limpaStorage();
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={handleLogout}
        style={styles.logout}
        labelStyle={styles.texto}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
    logout:{
        backgroundColor: '#D92744',
        color: '#fff'
    },
    texto:{
        color: '#fff',
        fontFamily: 'Museo-Moderno-Medium',
        fontSize: 16
    }
})
