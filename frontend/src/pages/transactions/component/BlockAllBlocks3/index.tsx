import React from 'react';
import { useStyles } from 'src/pages/transactions/component/BlockAllBlocks3/style';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import BlockAllBlocks3Model from 'src/pages/transactions/component/BlockAllBlocks3/model';
import { AppTable } from '@app/ui-kit';
import { AppTableTitle } from '@app/ui-kit';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import RowsPerPage14 from 'src/pages/transactions/component/RowsPerPage14';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import { Transaction } from 'src/core/model/Transaction';
import { DataProvider } from '@app/core';
import { Transactions } from 'src/core/model/Transactions';
import { AppTableBody } from '@app/ui-kit';

interface IBlockAllBlocks3Props {
    dataProvider: DataProvider<Transaction>;
}

const BlockAllBlocks3: React.FC<IBlockAllBlocks3Props> = ({ dataProvider }) => {
    const classes = useStyles({});
    const [value, setValue] = React.useState<number>(0);

    return (
        <div className={classes.root} >
            <AppTable
                className={classes.appTable}
                dataProvider={dataProvider}
            >
                <AppTableTitle className={classes.appTableTitle} >
                    <Tabs
                        className={classes.tabs}
                        value={value}
                        onChange={(event, newValue) => setValue(newValue)}
                    >
                        <Tab
                            className={classes.tab}
                            classes={{ root: classes.root1 }}
                            label={'All transactions'}
                        />
                        <Tab
                            className={classes.tab}
                            classes={{ root: classes.root2 }}
                            label={'Send'}
                        />
                        <Tab
                            className={classes.tab}
                            classes={{ root: classes.root2 }}
                            label={'Stake'}
                        />
                        <Tab
                            className={classes.tab}
                            classes={{ root: classes.root3 }}
                            label={'Vote'}
                        />
                        <Tab
                            className={classes.tab}
                            classes={{ root: classes.root2 }}
                            label={'Downvote'}
                        />
                        <Tab
                            className={classes.tab}
                            classes={{ root: classes.root2 }}
                            label={'Signature'}
                        />
                        <Tab
                            className={classes.tab}
                            classes={{ root: classes.root2 }}
                            label={'Registration'}
                        />
                        <Tab
                            className={classes.tab}
                            classes={{ root: classes.root4 }}
                            label={'Delegate'}
                        />
                    </Tabs>
                    <RowsPerPage14 />
                </AppTableTitle>
                <Table className={classes.table} >
                    <TableHead className={classes.tableHead} >
                        <TableRow
                            className={classes.tableRow}
                            classes={{ root: classes.root5 }}
                        >
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root6 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography} >
                                        Transaction
                                    </Typography>
                                    <div className={classes.custom1832199} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS41MDIgMTRIMTQuNzA4TDE0LjQzMiAxMy43MjZDMTUuNDA3IDEyLjU4OSAxNiAxMS4xMTUgMTYgOS41QzE2IDUuOTEgMTMuMDkgMyA5LjUgM0M1LjkxIDMgMyA1LjkxIDMgOS41QzMgMTMuMDkgNS45MSAxNiA5LjUgMTZDMTEuMTE1IDE2IDEyLjU4OCAxNS40MDggMTMuNzI1IDE0LjQzNEwxNC4wMDEgMTQuNzA4VjE1LjVMMTguOTk5IDIwLjQ5MUwyMC40OSAxOUwxNS41MDIgMTRaTTkuNSAxNEM3LjAxNCAxNCA1IDExLjk4NiA1IDkuNUM1IDcuMDE1IDcuMDE0IDUgOS41IDVDMTEuOTg1IDUgMTQgNy4wMTUgMTQgOS41QzE0IDExLjk4NiAxMS45ODUgMTQgOS41IDE0WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root6 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography1} >
                                        Sender
                                    </Typography>
                                    <div className={classes.custom1832205} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS41MDIgMTRIMTQuNzA4TDE0LjQzMiAxMy43MjZDMTUuNDA3IDEyLjU4OSAxNiAxMS4xMTUgMTYgOS41QzE2IDUuOTEgMTMuMDkgMyA5LjUgM0M1LjkxIDMgMyA1LjkxIDMgOS41QzMgMTMuMDkgNS45MSAxNiA5LjUgMTZDMTEuMTE1IDE2IDEyLjU4OCAxNS40MDggMTMuNzI1IDE0LjQzNEwxNC4wMDEgMTQuNzA4VjE1LjVMMTguOTk5IDIwLjQ5MUwyMC40OSAxOUwxNS41MDIgMTRaTTkuNSAxNEM3LjAxNCAxNCA1IDExLjk4NiA1IDkuNUM1IDcuMDE1IDcuMDE0IDUgOS41IDVDMTEuOTg1IDUgMTQgNy4wMTUgMTQgOS41QzE0IDExLjk4NiAxMS45ODUgMTQgOS41IDE0WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root6 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography2} >
                                        Recipient
                                    </Typography>
                                    <div className={classes.custom1832170} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg3QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root6 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography3} >
                                        Date / Time
                                    </Typography>
                                    <div className={classes.custom1832178} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg3QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root6 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography4} >
                                        Type
                                    </Typography>
                                    <div className={classes.custom1832185} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg3QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root6 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography5} >
                                        Amount
                                    </Typography>
                                    <div className={classes.custom1832164} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg3QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root6 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography6} >
                                        Fee
                                    </Typography>
                                    <div className={classes.custom1832192} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg3QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <AppTableBody className={classes.appTableBody} >
                        {(item: Transaction, index: number) => (
                            <TableRow
                                className={classes.tableRow1}
                                classes={{ root: classes.root5 }}
                                key={index}
                            >
                                <TableCell
                                    className={classes.tableCell1}
                                    classes={{ root: classes.root7 }}
                                >
                                    <div className={classes.div1} >
                                        <Typography className={classes.typography7} >
                                            { item.id }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell1}
                                    classes={{ root: classes.root7 }}
                                >
                                    <div className={classes.div1} >
                                        <Typography className={classes.typography8} >
                                            { item.senderAddress }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell1}
                                    classes={{ root: classes.root7 }}
                                >
                                    <div className={classes.div1} >
                                        <Typography className={classes.typography8} >
                                            { item.asset.recipientAddress }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell1}
                                    classes={{ root: classes.root7 }}
                                >
                                    <div className={classes.div1} >
                                        <Typography className={classes.typography9} >
                                            { item.createdAt}
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell1}
                                    classes={{ root: classes.root7 }}
                                >
                                    <div className={classes.div1} >
                                        <Typography className={classes.typography10} >
                                            { item.type }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell1}
                                    classes={{ root: classes.root7 }}
                                >
                                    <div className={classes.div1} >
                                        <Typography className={classes.typography11} >
                                            { item.asset.amount }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell1}
                                    classes={{ root: classes.root7 }}
                                >
                                    <div className={classes.div1} >
                                        <Typography className={classes.typography12} >
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

export default observer(BlockAllBlocks3);



