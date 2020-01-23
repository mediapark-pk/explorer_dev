import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import { useStyles } from 'src/pages/delegates/component/TablesWrapper/component/ActiveDelegatesTable/component/ActiveDelegatesTableRow/style';
import { VMDelegate } from 'src/common/model/VMDelegate';
import { NavLink } from 'react-router-dom';

interface IActiveDelegatesTableRowProps {
    value: VMDelegate;
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
