import React from 'react';
import clsx from 'clsx';
import { TableCell, Typography, TableRow, Link } from '@material-ui/core';
import { useStyles } from 'src/pages/delegate/component/TablesWrapper/component/VotesTable/component/VotesTableRow/style';
import { Vote } from 'src/core/model/Vote';
import { NavLink } from 'react-router-dom';

interface IVotesTableRowProps {
    value: Vote;
}

const VotesTableRow: React.FC<IVotesTableRowProps> = ({ value }) => {
    const classes = useStyles({});

    return (
        <TableRow>
            <TableCell className={classes.tableCell} >
                <NavLink to={`/accounts/${value.senderId}`} >
                    <Typography className={classes.link}>
                        {value.senderId}
                    </Typography>
                </NavLink>
            </TableCell>
            <TableCell className={classes.tableCell} >
                <NavLink to={`/blocks/${value.blockId}`} >
                    <Typography className={classes.link}>
                        {value.blockId}
                    </Typography>
                </NavLink>
            </TableCell>
            <TableCell className={clsx(classes.tableCell, classes.centered)} >
                <Typography>
                    {value.createdAt.format('DD/YY/MM')}
                </Typography>
            </TableCell>
            <TableCell className={classes.tableCell} >
                <Typography>
                    {value.fee}
                </Typography>
            </TableCell>
        </TableRow>
    );
};

export default VotesTableRow;
