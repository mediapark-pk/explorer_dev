import React from 'react';
import clsx from 'clsx';
import { useStyles } from 'src/pages/delegate/component/TablesWrapper/component/ForgedBlocksTable/component/ForgedBlocksTableHeader/style';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { 
    ForgedBlocksAllowedFilters as AllowedFilters, 
    ForgedBlocksAllowedSorts as AllowedSorts
} from 'src/pages/delegate/component/TablesWrapper/model';

import {
    AppTableSortLabel,
    AppTableSearchLabel
 } from '@app/ui-kit';

interface IForgedBlocksTableHeaderProps {}

const ForgedBlocksTableHeader: React.FC<IForgedBlocksTableHeaderProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <TableHead className={classes.root} >
            <TableRow>
                <TableCell className={classes.tableCell} >
                    <AppTableSearchLabel field={AllowedFilters.Height} >
                        Height
                    </AppTableSearchLabel>
                </TableCell>
                <TableCell className={classes.tableCell} >
                    <AppTableSearchLabel field={AllowedFilters.BlockId} >
                        Block ID
                    </AppTableSearchLabel>
                </TableCell>
                <TableCell className={clsx(classes.tableCell, classes.centered)} >
                    <AppTableSearchLabel field={AllowedFilters.Time} >
                        Time
                    </AppTableSearchLabel>
                </TableCell>
                <TableCell className={clsx(classes.tableCell, classes.centered)} >
                    <AppTableSortLabel columnId={AllowedSorts.Txn} >
                        Txn
                    </AppTableSortLabel>
                </TableCell>
                <TableCell className={clsx(classes.tableCell, classes.centered)} >
                    <AppTableSortLabel columnId={AllowedSorts.Amount} >
                        Amount
                    </AppTableSortLabel>
                </TableCell>
                <TableCell className={classes.tableCell} >
                    <AppTableSortLabel columnId={AllowedSorts.Fee} >
                        Fee
                    </AppTableSortLabel>
                </TableCell>
            </TableRow>
        </TableHead>
    );
};

export default ForgedBlocksTableHeader;
