import React from 'react';
import { useStyles } from 'src/pages/delegates/component/TablesWrapper/component/AllDelegatesTable/component/AllDelegatesTableHeader/style';
import { AllowedFilters, AllowedSorts } from 'src/pages/delegates/component/TablesWrapper/model';
import {
    TableRow,
    TableCell,
    Typography,
    TableHead
 } from '@material-ui/core';
import {
    AppTableSortLabel,
    AppTableSearchLabel
 } from '@app/ui-kit';

interface IAllDelegatesTableHeaderProps {}

const AllDelegatesTableHeader: React.FC<IAllDelegatesTableHeaderProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <TableHead className={classes.root} >
            <TableRow>
                <TableCell className={classes.tableCell} >
                    <Typography>
                        Delegate address
                    </Typography>
                </TableCell>
                <TableCell className={classes.tableCell} >
                    <AppTableSearchLabel field={AllowedFilters.Name} >
                        Delegate name
                    </AppTableSearchLabel>
                </TableCell>
                <TableCell className={classes.tableCell} >
                    <AppTableSortLabel columnId={AllowedSorts.Status} >
                        Status
                    </AppTableSortLabel>
                </TableCell>
                <TableCell className={classes.tableCellCentered} >
                    <Typography>
                        In active round
                    </Typography>
                </TableCell>
                <TableCell className={classes.tableCellCentered} >
                    <AppTableSortLabel columnId={AllowedSorts.Votes} >
                        Votes
                    </AppTableSortLabel>
                </TableCell>
                <TableCell className={classes.tableCellCentered} >
                    <AppTableSortLabel columnId={AllowedSorts.Uptime} >
                        Uptime
                    </AppTableSortLabel>
                </TableCell>
                <TableCell className={classes.tableCellCentered} >
                    <AppTableSortLabel columnId={AllowedSorts.ForgedBlocks} >
                        Forged blocks
                    </AppTableSortLabel>
                </TableCell>
                <TableCell className={classes.tableCell} >
                    <AppTableSortLabel columnId={AllowedSorts.MissedBlocks} >
                        Missed blocks
                    </AppTableSortLabel>
                </TableCell>
            </TableRow>
        </TableHead>
    );
};

export default AllDelegatesTableHeader;
