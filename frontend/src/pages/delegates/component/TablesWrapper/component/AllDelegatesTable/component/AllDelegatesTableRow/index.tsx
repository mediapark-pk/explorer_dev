import React from 'react';
import { TableCell, Typography, TableRow, Link } from '@material-ui/core';
import { useStyles } from 'src/pages/delegates/component/TablesWrapper/component/AllDelegatesTable/component/AllDelegatesTableRow/style';
import { VMDelegate } from 'src/common/model/VMDelegate';
import { NavLink } from 'react-router-dom';

interface IAllDelegatesTableRowProps {
    value: VMDelegate;
}

const AllDelegatesTableRow: React.FC<IAllDelegatesTableRowProps> = ({ value }) => {
    const classes = useStyles({});

    return (
        <TableRow>
            <TableCell className={classes.tableCell} >
                <NavLink to={`/delegates/${value.publicKey}`} >
                    <Typography className={classes.link}>
                        {value.publicKey}
                    </Typography>
                </NavLink>
            </TableCell>
            <TableCell className={classes.tableCell} >
                <NavLink to={`/delegates/${value.publicKey}`} >
                    <Typography className={classes.link}>
                        {value.username}
                    </Typography>
                </NavLink>
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

export default AllDelegatesTableRow;
