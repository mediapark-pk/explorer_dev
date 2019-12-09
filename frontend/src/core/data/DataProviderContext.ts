import React from 'react';
import { DataProvider } from 'src/core/data';

export const DataProviderContext = React.createContext<DataProvider<any>>(null);
