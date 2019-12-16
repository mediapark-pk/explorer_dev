import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { useStyles } from './styles';
import { DataProvider, DataProviderContext } from '@app/core';

interface IAppListProps {
    dataProvider: DataProvider<any>;
    children: ReactNode;
    className?: string;
}

export const AppList: React.FC<IAppListProps> = ({ dataProvider, children, className }) => {
    const classes = useStyles({});

    return (
        <div className={classNames(classes.root, className)}>
            <DataProviderContext.Provider value={dataProvider}>
                {children}
            </DataProviderContext.Provider>
        </div>
    );
};
