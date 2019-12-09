import React from 'react';
import { useStyles } from 'src/pages/addresses/component/TableRowAddreses/style';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

interface ITableRowAddresesProps {
}

const TableRowAddreses: React.FC<ITableRowAddresesProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div
            className={classes.root}
            classes={{ root: classes.root1 }}
        >
            <TableCell className={classes.tableCell} >
                <div className={classes.div} >
                    <Typography className={classes.typography} >
                        2B344A2B344A2B34
                    </Typography>
                </div>
            </TableCell>
            <TableCell className={classes.tableCell1} >
                <div className={classes.div} >
                    <Typography className={classes.typography1} >
                        4009519763706676860
                    </Typography>
                </div>
            </TableCell>
            <TableCell className={classes.tableCell2} >
                <div className={classes.div} >
                    <Typography className={classes.typography2} >
                        2.34123
                    </Typography>
                </div>
            </TableCell>
            <TableCell className={classes.tableCell3} >
                <div className={classes.div} >
                    <Typography className={classes.typography3} >
                        Name
                    </Typography>
                </div>
            </TableCell>
            <div className={classes.div1} >
                <Typography className={classes.typography3} >
                    24
                </Typography>
            </div>
            <TableCell className={classes.tableCell4} >
                <div className={classes.div} >
                    <Typography className={classes.typography3} >
                        24
                    </Typography>
                </div>
            </TableCell>
            <TableCell className={classes.tableCell5} >
                <div className={classes.div} >
                    <Typography className={classes.typography4} >
                        1
                    </Typography>
                </div>
            </TableCell>
            <TableCell className={classes.tableCell6} >
                <div className={classes.div} >
                    <Typography className={classes.typography4} >
                        2
                    </Typography>
                </div>
            </TableCell>
            <TableCell className={classes.tableCell7} >
                <div className={classes.div2} >
                    <Typography className={classes.typography5} >
                        0.03
                    </Typography>
                </div>
            </TableCell>
            <TableCell className={classes.tableCell8} >
                <div className={classes.div} >
                    <Typography className={classes.typography6} >
                        0.0016
                    </Typography>
                </div>
            </TableCell>
        </div>
    );
};

export default TableRowAddreses;



