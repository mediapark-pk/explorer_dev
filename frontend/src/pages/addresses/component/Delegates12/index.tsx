import React from 'react';
import { useStyles } from 'src/pages/addresses/component/Delegates12/style';
import DelegatesBlock from 'src/pages/addresses/component/DelegatesBlock';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Add from '@material-ui/icons/Add';
import { AppTable } from 'ui-kit';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { AppTableBody } from 'ui-kit';
import TableRowDelegates from 'src/pages/addresses/component/TableRowDelegates';

interface IDelegates12Props {
    item?: any;
}

const Delegates12: React.FC<IDelegates12Props> = ({ item, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <DelegatesBlock />
            <Button
                className={classes.button}
                classes={{ root: classes.root1 }}
            >
                <Typography className={classes.typography} >
                    Add delegate
                </Typography>
                <Add className={classes.add} />
            </Button>
            <AppTable
                className={classes.appTable}
                item={item}
            >
                <TableHead className={classes.tableHead} >
                    <TableRow
                        className={classes.tableRow}
                        classes={{ root: classes.root2 }}
                    >
                        <TableCell
                            className={classes.tableCell}
                            classes={{ root: classes.root3 }}
                        >
                            <div className={classes.div} >
                                <Typography className={classes.typography1} >
                                    Delegate name
                                </Typography>
                            </div>
                        </TableCell>
                        <TableCell
                            className={classes.tableCell}
                            classes={{ root: classes.root3 }}
                        >
                            <div className={classes.div} >
                                <Typography className={classes.typography2} >
                                    Votes
                                </Typography>
                            </div>
                        </TableCell>
                        <TableCell
                            className={classes.tableCell}
                            classes={{ root: classes.root3 }}
                        >
                            <div className={classes.div} >
                                <Typography className={classes.typography3} >
                                    Uptime
                                </Typography>
                            </div>
                        </TableCell>
                        <TableCell
                            className={classes.tableCell}
                            classes={{ root: classes.root3 }}
                        >
                            <div className={classes.div} >
                                <Typography className={classes.typography4} >
                                    Action
                                </Typography>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <AppTableBody
                    className={classes.appTableBody}
                    item={item}
                >
                    {(item: undefined, index: number) => (
                        <TableRowDelegates item={item} />
                    )}
                </AppTableBody>
            </AppTable>
        </div>
    );
};

export default Delegates12;



