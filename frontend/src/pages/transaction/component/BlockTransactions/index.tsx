import React from 'react';
import { useStyles } from 'src/pages/transaction/component/BlockTransactions/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import BlockTransactionsModel from 'src/pages/transaction/component/BlockTransactions/model';
import AppTable from 'src/uikit/AppTable';
import AppTableTitle from 'src/uikit/AppTableTitle';
import Typography from '@material-ui/core/Typography';
import RowsPerPage12 from 'src/pages/transaction/component/RowsPerPage12';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import AppTableSearch from 'src/uikit/AppTableSearch';
import { Transactionss } from 'src/core/model/Transactionss';
import AppTableBody from 'src/uikit/AppTableBody';

interface IBlockTransactionsProps {
}

const BlockTransactions: React.FC<IBlockTransactionsProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(BlockTransactionsModel);

    return (
        <div className={classes.root} >
            <AppTable
                className={classes.appTable}
                dataProvider={model.dataProvider}
            >
                <AppTableTitle className={classes.appTableTitle} >
                    <Typography className={classes.typography} >
                        Transactions in same block
                    </Typography>
                    <Typography className={classes.typography1} >
                        (10)
                    </Typography>
                    <RowsPerPage12 />
                </AppTableTitle>
                <Table className={classes.table} >
                    <TableHead className={classes.tableHead} >
                        <TableRow
                            className={classes.tableRow}
                            classes={{ root: classes.root1 }}
                        >
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div} >
                                    <AppTableSearch
                                        className={classes.appTableSearch}
                                        label={'Transaction'}
                                        field={'id'}
                                    />
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div1} >
                                    <Typography className={classes.typography2} >
                                        Sender
                                    </Typography>
                                    <div className={classes.custom1831022} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS41MDIgMTRIMTQuNzA4TDE0LjQzMiAxMy43MjZDMTUuNDA3IDEyLjU4OSAxNiAxMS4xMTUgMTYgOS40OTk5N0MxNiA1LjkwOTk3IDEzLjA5IDIuOTk5OTcgOS41IDIuOTk5OTdDNS45MSAyLjk5OTk3IDMgNS45MDk5NyAzIDkuNDk5OTdDMyAxMy4wOSA1LjkxIDE2IDkuNSAxNkMxMS4xMTUgMTYgMTIuNTg4IDE1LjQwOCAxMy43MjUgMTQuNDM0TDE0LjAwMSAxNC43MDhWMTUuNUwxOC45OTkgMjAuNDkxTDIwLjQ5IDE5TDE1LjUwMiAxNFpNOS41IDE0QzcuMDE0IDE0IDUgMTEuOTg2IDUgOS40OTk5N0M1IDcuMDE0OTcgNy4wMTQgNC45OTk5NyA5LjUgNC45OTk5N0MxMS45ODUgNC45OTk5NyAxNCA3LjAxNDk3IDE0IDkuNDk5OTdDMTQgMTEuOTg2IDExLjk4NSAxNCA5LjUgMTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+Cjwvc3ZnPgo='/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div1} >
                                    <Typography className={classes.typography3} >
                                        Recipient
                                    </Typography>
                                    <div className={classes.custom1831016} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS41MDIgMTRIMTQuNzA4TDE0LjQzMiAxMy43MjZDMTUuNDA3IDEyLjU4OSAxNiAxMS4xMTUgMTYgOS40OTk5N0MxNiA1LjkwOTk3IDEzLjA5IDIuOTk5OTcgOS41IDIuOTk5OTdDNS45MSAyLjk5OTk3IDMgNS45MDk5NyAzIDkuNDk5OTdDMyAxMy4wOSA1LjkxIDE2IDkuNSAxNkMxMS4xMTUgMTYgMTIuNTg4IDE1LjQwOCAxMy43MjUgMTQuNDM0TDE0LjAwMSAxNC43MDhWMTUuNUwxOC45OTkgMjAuNDkxTDIwLjQ5IDE5TDE1LjUwMiAxNFpNOS41IDE0QzcuMDE0IDE0IDUgMTEuOTg2IDUgOS40OTk5N0M1IDcuMDE0OTcgNy4wMTQgNC45OTk5NyA5LjUgNC45OTk5N0MxMS45ODUgNC45OTk5NyAxNCA3LjAxNDk3IDE0IDkuNDk5OTdDMTQgMTEuOTg2IDExLjk4NSAxNCA5LjUgMTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+Cjwvc3ZnPgo='/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div1} >
                                    <Typography className={classes.typography4} >
                                        Type
                                    </Typography>
                                    <div className={classes.custom1831010} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg3QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div1} >
                                    <Typography className={classes.typography5} >
                                        Amount
                                    </Typography>
                                    <div className={classes.custom1831003} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg3QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div1} >
                                    <Typography className={classes.typography6} >
                                        Fee
                                    </Typography>
                                    <div className={classes.custom183996} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg3QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <AppTableBody className={classes.appTableBody} >
                        {(item: Transactionss, index: number) => (
                            <TableRow
                                className={classes.tableRow1}
                                classes={{ root: classes.root1 }}
                                key={index}
                            >
                                <TableCell
                                    className={classes.tableCell1}
                                    classes={{ root: classes.root3 }}
                                >
                                    <div className={classes.div2} >
                                        <Typography className={classes.typography7} >
                                            { item.id }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell1}
                                    classes={{ root: classes.root3 }}
                                >
                                    <div className={classes.div2} >
                                        <Typography className={classes.typography7} >
                                            { item.senderAddress }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell1}
                                    classes={{ root: classes.root3 }}
                                >
                                    <div className={classes.div2} >
                                        <Typography className={classes.typography7} >
                                            { item.recipientAddress }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell1}
                                    classes={{ root: classes.root3 }}
                                >
                                    <div className={classes.div2} >
                                        <Typography className={classes.typography8} >
                                            { item.type }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell1}
                                    classes={{ root: classes.root3 }}
                                >
                                    <div className={classes.div2} >
                                        <Typography className={classes.typography9} >
                                            { item.amount }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell1}
                                    classes={{ root: classes.root3 }}
                                >
                                    <div className={classes.div2} >
                                        <Typography className={classes.typography10} >
                                            { item.fee }
                                        </Typography>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </AppTableBody>
                </Table>
            </AppTable>
        </div>
    );
};

export default observer(BlockTransactions);



