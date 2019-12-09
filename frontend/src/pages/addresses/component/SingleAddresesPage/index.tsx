import React from 'react';
import { useStyles } from 'src/pages/addresses/component/SingleAddresesPage/style';
import BackButton3 from 'src/pages/addresses/component/BackButton3';
import PageTitle6 from 'src/pages/addresses/component/PageTitle6';
import Blockinfo2 from 'src/pages/addresses/component/Blockinfo2';
import AppTable from 'src/uikit/AppTable';
import AppTableTitle from 'src/uikit/AppTableTitle';
import Tab from '@material-ui/core/Tab';
import RowsPerPage8 from 'src/pages/addresses/component/RowsPerPage8';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import AppTableBody from 'src/uikit/AppTableBody';
import ComentsAndNotes2 from 'src/pages/addresses/component/ComentsAndNotes2';

interface ISingleAddresesPageProps {
    item?: any;
}

const SingleAddresesPage: React.FC<ISingleAddresesPageProps> = ({ item, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <BackButton3 />
            </div>
            <div className={classes.div1} >
                <PageTitle6 />
            </div>
            <div className={classes.div2} >
                <Blockinfo2 />
            </div>
            <div className={classes.div3} >
                <AppTable
                    className={classes.appTable}
                    item={item}
                >
                    <AppTableTitle className={classes.appTableTitle} >
                        <div className={classes.div4} >
                            <Tab
                                className={classes.tab}
                                classes={{ root: classes.root1 }}
                                label={'Received'}
                            />
                            <Tab
                                className={classes.tab}
                                classes={{ root: classes.root2 }}
                                label={'Sent'}
                            />
                        </div>
                        <div className={classes.div5} >
                            <RowsPerPage8 />
                        </div>
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
                                    <div className={classes.div6} >
                                        <Typography className={classes.typography} >
                                            Block
                                        </Typography>
                                        <div className={classes.custom2518319} >
                                            <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS41MDIgMTRIMTQuNzA4TDE0LjQzMiAxMy43MjZDMTUuNDA3IDEyLjU4OSAxNiAxMS4xMTUgMTYgOS40OTk5N0MxNiA1LjkwOTk3IDEzLjA5IDIuOTk5OTcgOS41IDIuOTk5OTdDNS45MSAyLjk5OTk3IDMgNS45MDk5NyAzIDkuNDk5OTdDMyAxMy4wOSA1LjkxIDE2IDkuNSAxNkMxMS4xMTUgMTYgMTIuNTg4IDE1LjQwOCAxMy43MjUgMTQuNDM0TDE0LjAwMSAxNC43MDhWMTUuNUwxOC45OTkgMjAuNDkxTDIwLjQ5IDE5TDE1LjUwMiAxNFpNOS41IDE0QzcuMDE0IDE0IDUgMTEuOTg2IDUgOS40OTk5N0M1IDcuMDE0OTcgNy4wMTQgNC45OTk5NyA5LjUgNC45OTk5N0MxMS45ODUgNC45OTk5NyAxNCA3LjAxNDk3IDE0IDkuNDk5OTdDMTQgMTEuOTg2IDExLjk4NSAxNCA5LjUgMTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+Cjwvc3ZnPgo='/>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell}
                                    classes={{ root: classes.root4 }}
                                >
                                    <div className={classes.div6} >
                                        <Typography className={classes.typography1} >
                                            Transaction
                                        </Typography>
                                        <div className={classes.custom2518313} >
                                            <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS41MDIgMTRIMTQuNzA4TDE0LjQzMiAxMy43MjZDMTUuNDA3IDEyLjU4OSAxNiAxMS4xMTUgMTYgOS40OTk5N0MxNiA1LjkwOTk3IDEzLjA5IDIuOTk5OTcgOS41IDIuOTk5OTdDNS45MSAyLjk5OTk3IDMgNS45MDk5NyAzIDkuNDk5OTdDMyAxMy4wOSA1LjkxIDE2IDkuNSAxNkMxMS4xMTUgMTYgMTIuNTg4IDE1LjQwOCAxMy43MjUgMTQuNDM0TDE0LjAwMSAxNC43MDhWMTUuNUwxOC45OTkgMjAuNDkxTDIwLjQ5IDE5TDE1LjUwMiAxNFpNOS41IDE0QzcuMDE0IDE0IDUgMTEuOTg2IDUgOS40OTk5N0M1IDcuMDE0OTcgNy4wMTQgNC45OTk5NyA5LjUgNC45OTk5N0MxMS45ODUgNC45OTk5NyAxNCA3LjAxNDk3IDE0IDkuNDk5OTdDMTQgMTEuOTg2IDExLjk4NSAxNCA5LjUgMTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+Cjwvc3ZnPgo='/>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell1}
                                    classes={{ root: classes.root4 }}
                                >
                                    <div className={classes.div7} >
                                        <Typography className={classes.typography2} >
                                            Recipient
                                        </Typography>
                                        <div className={classes.custom2518307} >
                                            <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC4yMTAyIDEyLjgzMzRIMTMuNDgyM0wxMy4yMjkzIDEyLjU4MjJDMTQuMTIzMSAxMS41Mzk5IDE0LjY2NjcgMTAuMTg4OCAxNC42NjY3IDguNzA4MzZDMTQuNjY2NyA1LjQxNzUzIDExLjk5OTIgMi43NTAwMyA4LjcwODMzIDIuNzUwMDNDNS40MTc1IDIuNzUwMDMgMi43NSA1LjQxNzUzIDIuNzUgOC43MDgzNkMyLjc1IDExLjk5OTIgNS40MTc1IDE0LjY2NjcgOC43MDgzMyAxNC42NjY3QzEwLjE4ODcgMTQuNjY2NyAxMS41MzkgMTQuMTI0IDEyLjU4MTMgMTMuMjMxMkwxMi44MzQyIDEzLjQ4MjRWMTQuMjA4NEwxNy40MTU3IDE4Ljc4MzRMMTguNzgyNSAxNy40MTY3TDE0LjIxMDIgMTIuODMzNFpNOC43MDgzMyAxMi44MzM0QzYuNDI5NSAxMi44MzM0IDQuNTgzMzMgMTAuOTg3MiA0LjU4MzMzIDguNzA4MzZDNC41ODMzMyA2LjQzMDQ1IDYuNDI5NSA0LjU4MzM2IDguNzA4MzMgNC41ODMzNkMxMC45ODYyIDQuNTgzMzYgMTIuODMzMyA2LjQzMDQ1IDEyLjgzMzMgOC43MDgzNkMxMi44MzMzIDEwLjk4NzIgMTAuOTg2MiAxMi44MzM0IDguNzA4MzMgMTIuODMzNFoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPC9zdmc+Cg=='/>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell}
                                    classes={{ root: classes.root4 }}
                                >
                                    <div className={classes.div6} >
                                        <Typography className={classes.typography3} >
                                            Type
                                        </Typography>
                                        <div className={classes.custom2518300} >
                                            <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg2QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell}
                                    classes={{ root: classes.root4 }}
                                >
                                    <div className={classes.div6} >
                                        <Typography className={classes.typography4} >
                                            Amount
                                        </Typography>
                                        <div className={classes.custom2518293} >
                                            <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg2QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell}
                                    classes={{ root: classes.root4 }}
                                >
                                    <div className={classes.div6} >
                                        <Typography className={classes.typography5} >
                                            Fee
                                        </Typography>
                                        <div className={classes.custom2518286} >
                                            <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg2QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <AppTableBody
                            className={classes.appTableBody}
                            item={item}
                        >
                            {(item: undefined, index: number) => (
                                <TableRow
                                    className={classes.tableRow1}
                                    classes={{ root: classes.root3 }}
                                    key={index}
                                >
                                    <TableCell
                                        className={classes.tableCell2}
                                        classes={{ root: classes.root5 }}
                                    >
                                        <div className={classes.div8} >
                                            <Typography
                                                className={classes.typography6}
                                            >
                                                { item.id }
                                            </Typography>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className={classes.tableCell2}
                                        classes={{ root: classes.root5 }}
                                    >
                                        <div className={classes.div8} >
                                            <Typography
                                                className={classes.typography6}
                                            >
                                                { item.senderAddress }
                                            </Typography>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className={classes.tableCell2}
                                        classes={{ root: classes.root5 }}
                                    >
                                        <div className={classes.div8} >
                                            <Typography
                                                className={classes.typography7}
                                            >
                                                { item.recipientAddress }
                                            </Typography>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className={classes.tableCell2}
                                        classes={{ root: classes.root5 }}
                                    >
                                        <div className={classes.div9} >
                                            <Typography
                                                className={classes.typography8}
                                            >
                                                { item.type }
                                            </Typography>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className={classes.tableCell2}
                                        classes={{ root: classes.root5 }}
                                    >
                                        <div className={classes.div10} >
                                            <Typography
                                                className={classes.typography9}
                                            >
                                                { item.amount }
                                            </Typography>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className={classes.tableCell2}
                                        classes={{ root: classes.root5 }}
                                    >
                                        <div className={classes.div10} >
                                            <Typography
                                                className={classes.typography10}
                                            >
                                                { item.fee }
                                            </Typography>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                        </AppTableBody>
                    </Table>
                </AppTable>
                <ComentsAndNotes2 />
            </div>
        </div>
    );
};

export default SingleAddresesPage;



