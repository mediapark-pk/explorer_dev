import React, { ReactNode } from 'react';
import { Route, RouteProps } from 'react-router';
import { interfaces } from 'inversify';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';

export interface ICanActivate {
    canActivate: boolean;
}

export interface IAppRouteProps extends RouteProps {
    layout?: React.ComponentType<any>;
    canActivate?: Array<interfaces.Newable<ICanActivate>>;
    defaultComponent?: ReactNode;
};

const useCanActivate = (items: Array<interfaces.Newable<ICanActivate>>): boolean => {
    const [ isRender, setIsRender ] = React.useState<boolean>(undefined);
    const activates = Array.isArray(items)
        ? items.map(item => useDI(item))
        : [];

    React.useEffect(() => {
        const isActivatRender = activates.length
            ? activates.every(item => item.canActivate)
            : true;

        setIsRender(isActivatRender);
    }, []);

    return isRender;
}

const makeLayout = (layout: React.ComponentType<any>, component: React.ComponentType<any>) => {
    const Layout = layout;
    const Component = component;

    return () => {
        if (Layout) {
            return (
                <Layout>
                    <Component />
                </Layout>
            )
        }
    
        return <Component />
    }
}

export const AppRoute: React.FC<IAppRouteProps> = observer(({ layout, canActivate, defaultComponent, ...props }) => {
    const isRender = useCanActivate(canActivate);
    props.component = makeLayout(layout, props.component);

    if (isRender === undefined) {
        return null;    
    }

    if (isRender) {
        return <Route {...props} />;
    }    
    if (defaultComponent) {
        return (
            <>{defaultComponent}</>
        );
    }
    return null;
});
