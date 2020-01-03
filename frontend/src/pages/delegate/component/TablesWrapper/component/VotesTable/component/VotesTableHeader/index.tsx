import React from 'react';
import clsx from 'clsx';
import { useStyles } from 'src/pages/delegate/component/TablesWrapper/component/VotesTable/component/VotesTableHeader/style';
import { 
    VotesAllowedFilters as AllowedFilters, 
    VotesAllowedSorts as AllowedSorts
} from 'src/pages/delegate/component/TablesWrapper/model';
import {
    TableRow,
    TableCell,
    TableHead
 } from '@material-ui/core';
import {
    AppTableSortLabel,
    AppTableSearchLabel
 } from '@app/ui-kit';

interface IVotesTableHeaderProps {}

const VotesTableHeader: React.FC<IVotesTableHeaderProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <TableHead className={classes.root} >
            <TableRow>
                <TableCell className={classes.tableCell} >
                    <AppTableSearchLabel field={AllowedFilters.Sender} >
                        Sender
                    </AppTableSearchLabel>
                </TableCell>
                <TableCell className={classes.tableCell} >
                    <AppTableSearchLabel field={AllowedFilters.BlockId} >
                        Block ID
                    </AppTableSearchLabel>
                </TableCell>
                <TableCell className={clsx(classes.tableCell, classes.centered)} >
                    <AppTableSortLabel columnId={AllowedSorts.Time} >
                        Date / Time
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

export default VotesTableHeader;
