import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useStyles } from './styles';
import { DataProviderContext } from '@app/core';

interface IAppTableHeadProps {
    className?: string;
    children: ReactNode;
}

export const AppTableTitle: React.FC<IAppTableHeadProps> = observer(({ className, children }) => {
    const classes = useStyles({});
    const dataProvider = React.useContext(DataProviderContext);

    return (
        <div className={classNames(classes.root, className)}>
            {children}
        </div>
    );
});
