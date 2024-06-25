import React, { createContext, useState, ReactNode, useContext } from 'react';

interface RefreshContextProps {
    refresh: boolean;
    setRefresh: (value: boolean) => void;
}

const RefreshContext = createContext<RefreshContextProps | undefined>(undefined);

export const useRefresh = () => {
    const context = useContext(RefreshContext);
    return context || { refresh: false, setRefresh: () => {} };
};

export const RefreshProvider = ({ children }: { children: ReactNode }) => {
    const [refresh, setRefresh] = useState(false);

    return (
        <RefreshContext.Provider value={{ refresh, setRefresh }}>
            {children}
        </RefreshContext.Provider>
    );
};
