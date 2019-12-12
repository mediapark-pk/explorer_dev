import React from 'react';
import { useStyles } from 'src/pages/addresses/component/Addresses13/style';
import DelegatesBlock1 from 'src/pages/addresses/component/DelegatesBlock1';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Add from '@material-ui/icons/Add';
import AppTable from 'ui-kit/AppTable';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import AppTableBody from 'ui-kit/AppTableBody';
import TableRowDelegates4 from 'src/pages/addresses/component/TableRowDelegates4';

interface IAddresses13Props {
    item?: any;
}

const Addresses13: React.FC<IAddresses13Props> = ({ item, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <DelegatesBlock1 />
            <Button
                className={classes.button}
                classes={{ root: classes.root1 }}
            >
                <Typography className={classes.typography} >
                    Add address
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
                                    Address
                                </Typography>
                            </div>
                        </TableCell>
                        <TableCell
                            className={classes.tableCell}
                            classes={{ root: classes.root3 }}
                        >
                            <div className={classes.div} >
                                <Typography className={classes.typography2} >
                                    Balance
                                </Typography>
                            </div>
                        </TableCell>
                        <TableCell
                            className={classes.tableCell}
                            classes={{ root: classes.root3 }}
                        >
                            <div className={classes.div} >
                                <Typography className={classes.typography3} >
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
                        <TableRowDelegates4 item={item} />
                    )}
                </AppTableBody>
            </AppTable>
        </div>
    );
};

export default Addresses13;



