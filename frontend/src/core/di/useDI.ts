import React from 'react';
import { interfaces } from 'inversify';
import { injectable as inversifyInjectable } from 'inversify';
import { DIContext, container } from 'src/core/di/Provider';

export const singleton = (target: any) => {
    container.bind(inversifyInjectable()(target)).toSelf().inSingletonScope();
};

export const transient = (target: any) => {
    container.bind(inversifyInjectable()(target)).toSelf().inTransientScope();
};

export const useDI = <T>(serviceIdentifier: interfaces.ServiceIdentifier<T>): T => {
    return React.useContext(DIContext).get<T>(serviceIdentifier);
};
