import React, { ReactNode } from 'react';
import TableHead from '@material-ui/core/TableHead';
import { observer } from 'mobx-react-lite';
import { useStyles } from './styles';
import { DataProviderContext, DataProvider } from '@app/core';

interface IAppTableHeadProps {
    className?: string;
    children: ReactNode;
}

const AppTableHeadComponent: React.FC<IAppTableHeadProps> = ({ className, children }) => {
    const classes = useStyles({});
    const dataProvider = React.useContext<DataProvider>(DataProviderContext);

    return (
        <TableHead>
            {children}
        </TableHead>
    );
};

export const AppTableHead = observer(AppTableHeadComponent);
