import React from 'react';
import { useStyles } from 'src/pages/delegate/component/TableRowVotes/style';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

interface ITableRowVotesProps {
    item?: any;
}

const TableRowVotes: React.FC<ITableRowVotesProps> = ({ item, }) => {
    const classes = useStyles({});

    return (
        <div
            className={classes.root}
            classes={{ root: classes.root1 }}
        >
            <div className={classes.div} >
                <TableCell className={classes.tableCell} >
                    <div className={classes.div1} >
                        <Typography
                            className={classes.typography}
                        >
                            { item.id }
                        </Typography>
                    </div>
                </TableCell>
            </div>
            <div className={classes.div2} >
                <TableCell className={classes.tableCell1} >
                    <div className={classes.div3} >
                        <div className={classes.div4} >
                        </div>
                    </div>
                </TableCell>
                <TableCell className={classes.tableCell2} >
                    <div className={classes.div3} >
                        <div className={classes.div4} >
                        </div>
                    </div>
                </TableCell>
                <Typography
                    className={classes.typography1}
                >
                    { item.senderAddress }
                </Typography>
            </div>
            <div className={classes.div5} >
                <Typography
                    className={classes.typography2}
                >
                    { item.recipientAddress }
                </Typography>
                <TableCell className={classes.tableCell3} >
                    <div className={classes.div6} >
                    </div>
                </TableCell>
            </div>
            <div className={classes.div7} >
                <TableCell className={classes.tableCell} >
                    <div className={classes.div6} >
                    </div>
                </TableCell>
            </div>
            <div className={classes.div8} >
                <TableCell className={classes.tableCell} >
                    <div className={classes.div3} >
                        <Typography
                            className={classes.typography3}
                        >
                            { item.fee }
                        </Typography>
                    </div>
                </TableCell>
            </div>
        </div>
    );
};

export default TableRowVotes;



