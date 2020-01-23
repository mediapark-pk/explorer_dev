import React from 'react';
import clsx from 'clsx';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import { useStyles } from 'src/pages/delegate/component/TablesWrapper/component/ForgedBlocksTable/component/ForgedBlocksTableRow/style';
import { VMBlock } from 'src/common/model/VMBlock';
import { NavLink } from 'react-router-dom';

interface IForgedBlocksTableRowProps {
    value: VMBlock;
}

const ForgedBlocksTableRow: React.FC<IForgedBlocksTableRowProps> = ({ value }) => {
    const classes = useStyles({});

    return (
        <TableRow className={classes.root} >
            <TableCell className={clsx(classes.tableCell, classes.link)} >
                <Typography>
                    {value.height}
                </Typography>
            </TableCell>
            <TableCell className={clsx(classes.tableCell, classes.link)} >
                <NavLink to={`/block/${value.id}`} >
                    <Typography className={classes.link}>
                        {value.id}
                    </Typography>
                </NavLink>
            </TableCell>
            <TableCell className={clsx(
                classes.tableCell,
                classes.centered,
                classes.link
            )} >
                <Typography>
                    {value.createdAt.humanize()}
                </Typography>
            </TableCell>
            <TableCell className={clsx(classes.tableCell, classes.centered)} >
                <Typography>
                    {value.transactionCount}
                </Typography>
            </TableCell>
            <TableCell className={clsx(classes.tableCell, classes.centered)} >
                <Typography>
                    {value.amount}
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

export default ForgedBlocksTableRow;
