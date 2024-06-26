import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { getUsuarios } from '../services/usuariosServices';
import * as SecureStore from 'expo-secure-store';
import * as Network from 'expo-network';

export interface User {
  id: number;
  username: string;
  senha: string;
}

export interface UserContextType {
  users: User[];
  setEstaLogado: any;
  estaLogado: boolean;
  estaConectado: boolean;
}


export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [estaLogado, setEstaLogado] = useState<boolean>(false);
  const [estaConectado, setEstaConectado] = useState<boolean>(true);

  const fetchUsers = async () => {
    try {
      const {data} = await getUsuarios();
      setUsers(data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  const fetchConnection = async () => {
    try {
      if((await Network.getNetworkStateAsync()).isConnected){
        setEstaConectado(true)
      }
    } catch (err) {
      setEstaConectado(false)
      console.log(err)
    }
  }

  const getUsuarioLogado = async () => {
    try{
      const UsuarioLogado = await SecureStore.getItemAsync('user');
      if(UsuarioLogado){
        setEstaLogado(true);
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUsuarioLogado()
    fetchUsers();
    fetchConnection()
  }, []);

  return (
    <UserContext.Provider value={{ users, setEstaLogado, estaLogado, estaConectado }}>
      {children}
    </UserContext.Provider>
  );
};
