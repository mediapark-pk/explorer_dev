import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { useStyles } from './styles';
import { DataProvider, DataProviderContext } from '@app/core';

interface IAppTableProps {
    dataProvider: DataProvider<any>;
    children: ReactNode;
    className?: string;
}

export const AppTable: React.FC<IAppTableProps> = ({ dataProvider, children, className }) => {
    const classes = useStyles({});

    return (
        <div className={classNames(classes.root, className)}>
            <DataProviderContext.Provider value={dataProvider}>
                {children}
            </DataProviderContext.Provider>
        </div>
    );
};

