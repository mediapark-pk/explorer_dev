import { injectable, Container } from 'inversify';
import { RouterStore } from 'mobx-react-router';
import { ModalManager } from '@app/ui-kit';

export const container = new Container({defaultScope: 'Singleton'});

export const singleton = (target: any) => {
    container.bind(injectable()(target)).toSelf().inSingletonScope();
};

export const transient = (target: any) => {
    container.bind(injectable()(target)).toSelf().inTransientScope();
};

container.bind(injectable()(RouterStore)).toSelf();
container.bind(injectable()(ModalManager)).toSelf();
