import React from 'react';
import { useStyles } from 'src/pages/address/backlog/TableRowDelegates/style';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

interface ITableRowDelegatesProps {
    item?: any;
}

const TableRowDelegates: React.FC<ITableRowDelegatesProps> = ({ item, }) => {
    const classes = useStyles({});

    return (
        <div
            className={classes.root}
            classes={{ root: classes.root1 }}
        >
            <TableCell className={classes.tableCell} >
                <div className={classes.div} >
                    <Typography
                        className={classes.typography}
                    >
                        { item.id }
                    </Typography>
                </div>
            </TableCell>
            <TableCell className={classes.tableCell1} >
                <div className={classes.div} >
                    <Typography
                        className={classes.typography1}
                    >
                        { item.recipientAddress }
                    </Typography>
                </div>
            </TableCell>
            <TableCell className={classes.tableCell2} >
                <div className={classes.div1} >
                </div>
            </TableCell>
            <TableCell className={classes.tableCell3} >
                <div className={classes.div} >
                    <Typography
                        className={classes.typography1}
                    >
                        { item.recipientAddress }
                    </Typography>
                </div>
            </TableCell>
            <div className={classes.tableCell4} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMTIiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxMiAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDhDNy4xIDggOCA3LjEgOCA2QzggNC45IDcuMSA0IDYgNEM0LjkgNCA0IDQuOSA0IDZDNCA3LjEgNC45IDggNiA4Wk02IDEwQzQuOSAxMCA0IDEwLjkgNCAxMkM0IDEzLjEgNC45IDE0IDYgMTRDNy4xIDE0IDggMTMuMSA4IDEyQzggMTAuOSA3LjEgMTAgNiAxMFpNNiAxNkM0LjkgMTYgNCAxNi45IDQgMThDNCAxOS4xIDQuOSAyMCA2IDIwQzcuMSAyMCA4IDE5LjEgOCAxOEM4IDE2LjkgNy4xIDE2IDYgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K'/>
            </div>
        </div>
    );
};

export default TableRowDelegates;



