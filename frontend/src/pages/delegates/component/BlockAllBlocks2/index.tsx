import React from 'react';
import { useStyles } from 'src/pages/delegates/component/BlockAllBlocks2/style';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import BlockAllBlocks2Model from 'src/pages/delegates/component/BlockAllBlocks2/model';
import { AppTable } from '@app/ui-kit';
import { AppTableTitle } from '@app/ui-kit';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import RowsPerPage10 from 'src/pages/delegates/component/RowsPerPage10';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import { Delegates } from 'src/core/model/Delegates';
import { AppTableBody } from '@app/ui-kit';

interface IBlockAllBlocks2Props {
}

const BlockAllBlocks2: React.FC<IBlockAllBlocks2Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(BlockAllBlocks2Model);
    const [value, setValue] = React.useState<number>(0);

    return (
        <div className={classes.root} >
            <AppTable
                className={classes.appTable}
                dataProvider={model.dataProvider}
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
                            label={'Active round'}
                        />
                        <Tab
                            className={classes.tab}
                            classes={{ root: classes.root2 }}
                            label={'All delegates'}
                        />
                    </Tabs>
                    <RowsPerPage10 />
                </AppTableTitle>
                <Table className={classes.table} >
                    <TableHead className={classes.tableHead} >
                        <TableRow
                            className={classes.tableRow}
                            classes={{ root: classes.root3 }}
                        >
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root4 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography} >
                                        Pin
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell1}
                                classes={{ root: classes.root4 }}
                            >
                                <div className={classes.div1} >
                                    <Typography className={classes.typography1} >
                                        Status
                                    </Typography>
                                    <div className={classes.custom2012720} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS41MDIgMTRIMTQuNzA4TDE0LjQzMiAxMy43MjZDMTUuNDA3IDEyLjU4OSAxNiAxMS4xMTUgMTYgOS41QzE2IDUuOTEgMTMuMDkgMyA5LjUgM0M1LjkxIDMgMyA1LjkxIDMgOS41QzMgMTMuMDkgNS45MSAxNiA5LjUgMTZDMTEuMTE1IDE2IDEyLjU4OCAxNS40MDggMTMuNzI1IDE0LjQzNEwxNC4wMDEgMTQuNzA4VjE1LjVMMTguOTk5IDIwLjQ5MUwyMC40OSAxOUwxNS41MDIgMTRaTTkuNSAxNEM3LjAxNCAxNCA1IDExLjk4NiA1IDkuNUM1IDcuMDE1IDcuMDE0IDUgOS41IDVDMTEuOTg1IDUgMTQgNy4wMTUgMTQgOS41QzE0IDExLjk4NiAxMS45ODUgMTQgOS41IDE0WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell1}
                                classes={{ root: classes.root4 }}
                            >
                                <div className={classes.div1} >
                                    <Typography className={classes.typography2} >
                                        Delegate name
                                    </Typography>
                                    <div className={classes.custom2012726} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS41MDIgMTRIMTQuNzA4TDE0LjQzMiAxMy43MjZDMTUuNDA3IDEyLjU4OSAxNiAxMS4xMTUgMTYgOS41QzE2IDUuOTEgMTMuMDkgMyA5LjUgM0M1LjkxIDMgMyA1LjkxIDMgOS41QzMgMTMuMDkgNS45MSAxNiA5LjUgMTZDMTEuMTE1IDE2IDEyLjU4OCAxNS40MDggMTMuNzI1IDE0LjQzNEwxNC4wMDEgMTQuNzA4VjE1LjVMMTguOTk5IDIwLjQ5MUwyMC40OSAxOUwxNS41MDIgMTRaTTkuNSAxNEM3LjAxNCAxNCA1IDExLjk4NiA1IDkuNUM1IDcuMDE1IDcuMDE0IDUgOS41IDVDMTEuOTg1IDUgMTQgNy4wMTUgMTQgOS41QzE0IDExLjk4NiAxMS45ODUgMTQgOS41IDE0WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell1}
                                classes={{ root: classes.root4 }}
                            >
                                <div className={classes.div1} >
                                    <Typography className={classes.typography3} >
                                        Votes
                                    </Typography>
                                    <div className={classes.custom2012698} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg3QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell1}
                                classes={{ root: classes.root4 }}
                            >
                                <div className={classes.div1} >
                                    <Typography className={classes.typography4} >
                                        Uptime
                                    </Typography>
                                    <div className={classes.custom2012706} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg3QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell1}
                                classes={{ root: classes.root4 }}
                            >
                                <div className={classes.div1} >
                                    <Typography className={classes.typography5} >
                                        Forged blocks
                                    </Typography>
                                    <div className={classes.custom2012713} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg3QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell1}
                                classes={{ root: classes.root4 }}
                            >
                                <div className={classes.div1} >
                                    <Typography className={classes.typography6} >
                                        Missed blocks
                                    </Typography>
                                    <div className={classes.custom2012692} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg3QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <AppTableBody className={classes.appTableBody} >
                        {(item: Delegates, index: number) => (
                            <TableRow
                                className={classes.tableRow1}
                                classes={{ root: classes.root3 }}
                                key={index}
                            >
                                <TableCell
                                    className={classes.tableCell1}
                                    classes={{ root: classes.root5 }}
                                >
                                    <div className={classes.div2} >
                                        <div className={classes.div3} >
                                            <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0xOS44NjM3IDcuODQ3NTRDMjAuMjYyNiA3LjQ0NzUyIDE5Ljc1NjYgNi4yOTI0IDE4LjczMTUgNS4yNjc1N0MxNy43MTg2IDQuMjU0NiAxNi41ODIgMy43NTEwMyAxNi4xNjg4IDQuMTI1NDZMMTYuMTYwOCA0LjExNzc0TDEwLjQ4MjYgOS4yMTc1NUM5LjQzMjc5IDguMzAyNTUgNy44NDUyOCA4LjMzMzc2IDYuODQ1MjYgOS4zMzMwNkM2LjY3Njk2IDkuNTAxNjMgNi41ODIxIDkuNzMwMDggNi41ODIxIDkuOTY4NEM2LjU4MjEgMTAuMjA2OCA2LjY3NjkyIDEwLjQzNTMgNi44NDUyNiAxMC42MDM1TDkuNDIxMjUgMTMuMTc5M0w0LjEyNzU0IDE5LjE1NDdDMy45NTkyNyAxOS4zNDQyIDMuOTU1NTQgMTkuNjMzNyA0LjEyODAzIDE5LjgyOEM0LjMxMzk5IDIwLjAzNzMgNC42MzQ1OCAyMC4wNTY2IDQuODQ0NCAxOS44NzAzTDEwLjgxMjIgMTQuNTcwNkwxMS4wNjg1IDE0LjgyNjVMMTIuMzk1NiAxNi4xNTM3TDEzLjM4NzIgMTcuMTQ1QzEzLjU1NTUgMTcuMzEzMyAxMy43ODQgMTcuNDA3OCAxNC4wMjIxIDE3LjQwNzhDMTQuMjYgMTcuNDA3OCAxNC40ODg2IDE3LjMxMzEgMTQuNjU2OCAxNy4xNDQ1QzE1LjY1NTggMTYuMTQ1MSAxNS42ODczIDE0LjU1NyAxNC43NzI1IDEzLjUwNzRMMTkuODQ1NyA3Ljg1ODE3QzE5Ljg1MDggNy44NTM2NiAxOS44NTg5IDcuODUyNjQgMTkuODYzNyA3Ljg0NzU0WiIgZmlsbD0iIzNEOTBFMyIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgNCkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K'/>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell}
                                    classes={{ root: classes.root5 }}
                                >
                                    <div className={classes.div} >
                                        <Typography className={classes.typography7} >
                                            { item.status }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell}
                                    classes={{ root: classes.root5 }}
                                >
                                    <div className={classes.div} >
                                        <Typography className={classes.typography8} >
                                            { item.name }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell2}
                                    classes={{ root: classes.root5 }}
                                >
                                    <div className={classes.div4} >
                                        <Typography className={classes.typography9} >
                                            { item.votes }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell}
                                    classes={{ root: classes.root5 }}
                                >
                                    <div className={classes.div} >
                                        <Typography className={classes.typography10} >
                                            { item.fblocks }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell2}
                                    classes={{ root: classes.root5 }}
                                >
                                    <div className={classes.div4} >
                                        <Typography className={classes.typography11} >
                                            1944
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell2}
                                    classes={{ root: classes.root5 }}
                                >
                                    <div className={classes.div4} >
                                        <Typography className={classes.typography12} >
                                            { item.mblocks }
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

export default observer(BlockAllBlocks2);



