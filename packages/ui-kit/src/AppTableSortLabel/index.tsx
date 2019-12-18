import React from 'react';
import { observer } from 'mobx-react-lite';
import { TableSortLabel } from '@material-ui/core';
import { DataProviderContext, DataProvider } from '@app/core';
import { useStyles } from './styles';
import { reverseSortOrder } from 'src/util';

interface IAppTableSortLabelProps {
    columnId: string;
}

const AppTableSortLabelComponent: React.FC<IAppTableSortLabelProps> = ({ columnId, children}) => {
    const classes = useStyles({});
    const dataProvider = React.useContext<DataProvider>(DataProviderContext);

    // Support only single column sorting or none
    let [ activeSortColumn, activeSortOrder ] = dataProvider.sort[0] || ['', 'asc'];

    const createSortHandler = (_columnId: string) => (event: React.MouseEvent<unknown>) => {
        dataProvider.setSort([[_columnId, reverseSortOrder(activeSortOrder)]]);
    };

    return (
        <TableSortLabel
            className={classes.root}
            active={activeSortColumn === columnId}
            direction={activeSortOrder}
            onClick={createSortHandler(columnId)}
        >
            {children}
        </TableSortLabel>
    );
};

export const AppTableSortLabel = observer(AppTableSortLabelComponent);