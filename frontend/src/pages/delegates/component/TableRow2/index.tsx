import React from 'react';
import { useStyles } from 'src/pages/delegates/component/TableRow2/style';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

interface ITableRow2Props {
}

const TableRow2: React.FC<ITableRow2Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div
            className={classes.root1}
        >
            <TableCell className={classes.tableCell} >
                <div className={classes.div} >
                    <Typography className={classes.typography} >
                        4009519763706
                    </Typography>
                </div>
            </TableCell>
            <TableCell className={classes.tableCell1} >
                <div className={classes.div} >
                    <Typography className={classes.typography1} >
                        td073_crev_brunei
                    </Typography>
                </div>
            </TableCell>
            <TableCell className={classes.tableCell2} >
                <div className={classes.div} >
                    <Typography className={classes.typography2} >
                        Active
                    </Typography>
                </div>
            </TableCell>
            <TableCell className={classes.tableCell3} >
                <div className={classes.div} >
                    <Typography className={classes.typography3} >
                        –
                    </Typography>
                </div>
            </TableCell>
            <TableCell className={classes.tableCell4} >
                <div className={classes.div} >
                    <Typography className={classes.typography4} >
                        1 241
                    </Typography>
                </div>
            </TableCell>
            <TableCell className={classes.tableCell5} >
                <div className={classes.div} >
                    <Typography className={classes.typography5} >
                        98.88%
                    </Typography>
                </div>
            </TableCell>
            <TableCell className={classes.tableCell6} >
                <div className={classes.div1} >
                    <Typography className={classes.typography6} >
                        1944
                    </Typography>
                </div>
            </TableCell>
            <TableCell className={classes.tableCell7} >
                <div className={classes.div1} >
                    <Typography className={classes.typography7} >
                        23
                    </Typography>
                </div>
            </TableCell>
        </div>
    );
};

export default TableRow2;



