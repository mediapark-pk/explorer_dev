import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/BlockTransactions3/style';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import BlockTransactions3Model from 'src/pages/dashboard/component/BlockTransactions3/model';
import { AppTable } from '@app/ui-kit';
import { AppTableTitle } from '@app/ui-kit';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Transaction } from 'src/core/model/Transaction';
import { AppTableBody } from '@app/ui-kit';
import Button from '@material-ui/core/Button';
import NoIccon27 from 'src/pages/dashboard/component/NoIccon27';

interface IBlockTransactions3Props {
}

const BlockTransactions3: React.FC<IBlockTransactions3Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(BlockTransactions3Model);

    return (
        <div className={classes.root} >
            <AppTable
                className={classes.appTable}
                dataProvider={model.dataProvider}
            >
                <AppTableTitle className={classes.appTableTitle} >
                    <div className={classes.custom1583430} >
                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI3IDI4TDQzIDE5IiBzdHJva2U9IiMzRDkwRTMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjMgMjFMMzkgMTIiIHN0cm9rZT0iIzNEOTBFMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNyAxOEwzMyA5IiBzdHJva2U9IiMzRDkwRTMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTEgMTVMMjcgNiIgc3Ryb2tlPSIjM0Q5MEUzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTI3IDM0TDQzIDI1IiBzdHJva2U9IiMzRDkwRTMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjcgNDBMNDMgMzEiIHN0cm9rZT0iIzNEOTBFMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMiAyOEw2IDE5IiBzdHJva2U9IiMzRDkwRTMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjIgMzRMNiAyNSIgc3Ryb2tlPSIjM0Q5MEUzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTIyIDQwTDYgMzEiIHN0cm9rZT0iIzNEOTBFMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo='/>
                    </div>
                    <Typography className={classes.typography} >
                        Transactions
                    </Typography>
                    <Typography className={classes.typography1} >
                        2 850 407
                    </Typography>
                    <Typography className={classes.typography2} >
                        in total
                    </Typography>
                </AppTableTitle>
                <Table className={classes.table} >
                    <TableHead className={classes.tableHead} >
                        <TableRow
                            className={classes.tableHead}
                            classes={{ root: classes.root1 }}
                        >
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography3} >
                                        Block
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography4} >
                                        From
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography5} >
                                        To
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography6} >
                                        Time
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography7} >
                                        Fee
                                    </Typography>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <AppTableBody className={classes.appTableBody} >
                        {(item: Transaction, index: number) => (
                            <TableRow
                                className={classes.tableRow}
                                classes={{ root: classes.root3 }}
                                key={index}
                            >
                                <TableCell
                                    className={classes.tableCell1}
                                    classes={{ root: classes.root2 }}
                                >
                                    <div className={classes.div1} >
                                        <Typography className={classes.typography8} >
                                            { item.secondSignature }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell1}
                                    classes={{ root: classes.root2 }}
                                >
                                    <div className={classes.div1} >
                                        <Typography className={classes.typography8} >
                                            { item.signature }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell1}
                                    classes={{ root: classes.root2 }}
                                >
                                    <div className={classes.div1} >
                                        <Typography className={classes.typography8} >
                                            { item.blockId }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell2}
                                    classes={{ root: classes.root2 }}
                                >
                                    <div className={classes.div2} >
                                        <Typography className={classes.typography9} >
                                            { item.fee }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell2}
                                    classes={{ root: classes.root2 }}
                                >
                                    <div className={classes.div2} >
                                        <Typography className={classes.typography10} >
                                            { item.createdAt }
                                        </Typography>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </AppTableBody>
                </Table>
            </AppTable>
            <Button
                className={classes.button}
                classes={{ root: classes.root4 }}
            >
                <NoIccon27 />
            </Button>
        </div>
    );
};

export default observer(BlockTransactions3);



