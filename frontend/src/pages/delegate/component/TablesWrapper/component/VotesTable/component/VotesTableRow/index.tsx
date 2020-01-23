import React from 'react';
import clsx from 'clsx';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import { useStyles } from 'src/pages/delegate/component/TablesWrapper/component/VotesTable/component/VotesTableRow/style';
import { VMVote } from 'src/common/model/VMVote';
import { NavLink } from 'react-router-dom';

interface IVotesTableRowProps {
    value: VMVote;
}

const VotesTableRow: React.FC<IVotesTableRowProps> = ({ value }) => {
    const classes = useStyles({});

    return (
        <TableRow>
            <TableCell className={classes.tableCell} >
                <NavLink to={`/account/${value.senderId}`} >
                    <Typography className={classes.link}>
                        {value.senderId}
                    </Typography>
                </NavLink>
            </TableCell>
            <TableCell className={classes.tableCell} >
                <NavLink to={`/block/${value.blockId}`} >
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
