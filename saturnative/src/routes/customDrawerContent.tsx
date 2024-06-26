import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { UserContext, UserContextType } from '../contexts/UserContext';
import * as SecureStore from 'expo-secure-store';

export default function CustomDrawerContent(props: any) {
  const { setEstaLogado } = useContext(UserContext) as UserContextType;

  const limpaStorage = async () => {
    try {
      await SecureStore.deleteItemAsync('user');
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    setEstaLogado(false);
    limpaStorage();
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.logoutContainer}>
        <DrawerItem
          label="Logout"
          onPress={handleLogout}
          style={styles.logout}
          labelStyle={styles.texto}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logoutContainer: {
    padding: 10,
    paddingBottom: 20, 
  },
  logout: {
    backgroundColor: '#D92744',
  },
  texto: {
    color: '#fff',
    fontFamily: 'Museo-Moderno-Medium',
    fontSize: 16,
  },
});
