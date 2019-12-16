import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import { observer } from 'mobx-react-lite';
import { useStyles } from './styles';
import { DataProviderContext, DataProvider } from '@app/core';

interface IAppTableBodyProps {
    className?: string;
    children(item: any, index: number);
}

const AppTableBodyComponent: React.FC<IAppTableBodyProps> = ({ className, children }) => {
    const classes = useStyles({});
    const dataProvider = React.useContext<DataProvider>(DataProviderContext);

    return (
        <TableBody className={className}>
            {dataProvider.repository.data.map((item, index) => children(item, index))}
        </TableBody>
    );
};

export const AppTableBody = observer(AppTableBodyComponent);
