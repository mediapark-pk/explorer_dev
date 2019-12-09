import React, { ReactNode } from 'react';
import { Container } from 'inversify';

export const container = new Container();

export const DIContext = React.createContext<Container>(null);

interface IProvider {
    children: ReactNode;
    container: Container;
}

const Provider = ({ children, container }: IProvider) => {
    return (
        <DIContext.Provider value={container}>
            {children}
        </DIContext.Provider>
    );
};

export default Provider;
