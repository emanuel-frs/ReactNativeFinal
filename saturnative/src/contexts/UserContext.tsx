import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { getUsuarios } from '../services/usuariosServices';

export interface User {
  id: number;
  username: string;
  senha: string;
}

export interface UserContextType {
  users: User[];
  setEstaLogado: any;// RESOLVER AMBAS TIPAGENS
  estaLogado: any;
}


export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [estaLogado, setEstaLogado] = useState(false);

  const fetchUsers = async () => {
    try {
      const {data} = await getUsuarios();
      setUsers(data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, setEstaLogado, estaLogado }}>
      {children}
    </UserContext.Provider>
  );
};
