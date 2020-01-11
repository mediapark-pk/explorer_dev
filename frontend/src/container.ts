import { Container } from 'inversify';
import { getDecorators } from '@app/core';

export const container = new Container({defaultScope: 'Singleton'});

export const { singleton, transient } = getDecorators(container);
