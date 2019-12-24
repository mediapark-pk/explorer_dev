import React from 'react';
import { TableCell, Typography, TableRow, Link } from '@material-ui/core';
import { useStyles } from 'src/pages/delegates/component/MainTable/components/AllDelegatesTable/components/TableRow/style';
import { Delegate } from 'src/core/model/Delegate';

interface IAllTableRowProps {
    value: Delegate;
}

const AllTableRow: React.FC<IAllTableRowProps> = ({ value }) => {
    const classes = useStyles({});

    return (
        <TableRow>
            <TableCell className={classes.tableCell} >
                <Link href={`/delegates/${value.publicKey}`} className={classes.link} >
                    {value.publicKey}
                </Link>
            </TableCell>
            <TableCell className={classes.tableCell} >
                <Link href={`/delegates/${value.publicKey}`} className={classes.link} >
                    {value.username}
                </Link>
            </TableCell>
            <TableCell className={classes.tableCell} >
                <Typography className={classes.status} >
                    {'Active'}
                </Typography>
            </TableCell>
            <TableCell className={classes.tableCell} >
                <Typography className={classes.active} >
                    –
                </Typography>
            </TableCell>
            <TableCell className={classes.tableCell} >
                <Typography className={classes.votes} >
                    {value.votes}
                </Typography>
            </TableCell>
            <TableCell className={classes.tableCell} >
                <Typography className={classes.uptime} >
                    {value.approval}%
                </Typography>
            </TableCell>
            <TableCell className={classes.tableCell} >
                <Typography className={classes.forged} >
                    {value.forgedBlocks}
                </Typography>
            </TableCell>
            <TableCell className={classes.tableCell} >
                <Typography className={classes.missed} >
                    {value.missedBlocks}
                </Typography>
            </TableCell>
        </TableRow>
    );
};

export default AllTableRow;
