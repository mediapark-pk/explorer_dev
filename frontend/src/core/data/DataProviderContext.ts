import React from 'react';
import { DataProvider } from '@app/core';

export const DataProviderContext = React.createContext<DataProvider<any>>(null);
