import React from 'react';
import { TableCell, Typography, TableRow, Link } from '@material-ui/core';
import { useStyles } from 'src/pages/delegates/component/TablesWrapper/component/ActiveDelegatesTable/component/ActiveDelegatesTableRow/style';
import { Delegate } from 'src/core/model/Delegate';
import { NavLink } from 'react-router-dom';

interface IActiveDelegatesTableRowProps {
    value: Delegate;
}

const ActiveDelegatesTableRow: React.FC<IActiveDelegatesTableRowProps> = ({ value }) => {
    const classes = useStyles({});

    return (
        <TableRow className={classes.root} >
            <TableCell className={classes.tableCell} >
                <Typography className={classes.status} >
                    {'Active'}
                </Typography>
            </TableCell>
            <TableCell className={classes.tableCell} >
                <NavLink to={`/delegates/${value.publicKey}`} >
                    <Typography className={classes.link}>
                        {value.username}
                    </Typography>
                </NavLink>
            </TableCell>
            <TableCell className={classes.tableCell} >
                <Typography className={classes.votes} >
                    {value.votes}
                </Typography>
            </TableCell>
            <TableCell className={classes.tableCell} >
                <Typography className={classes.uptime} >
                    {value.approval}
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

export default ActiveDelegatesTableRow;
