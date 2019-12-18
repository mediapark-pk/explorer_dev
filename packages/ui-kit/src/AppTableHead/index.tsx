import React, { ReactNode } from 'react';
import classNames from 'classnames';
import TableHead from '@material-ui/core/TableHead';
import { observer } from 'mobx-react-lite';
import { useStyles } from './styles';
import { DataProviderContext, DataProvider } from '@app/core';

interface IAppTableHeadProps {
    className?: string;
    children: ReactNode;
}

export const AppTableHead: React.FC<IAppTableHeadProps> = observer(({ className, children }) => {
    const classes = useStyles({});
    const dataProvider = React.useContext<DataProvider>(DataProviderContext);

    return (
        <TableHead>
            {children}
        </TableHead>
    );
});
