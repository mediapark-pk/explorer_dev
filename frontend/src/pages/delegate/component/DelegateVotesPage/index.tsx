import React from 'react';
import { useStyles } from 'src/pages/delegate/component/DelegateVotesPage/style';
import BackButton1 from 'src/pages/delegate/component/BackButton1';
import PageTitle2 from 'src/pages/delegate/component/PageTitle2';
import Blockinfo1 from 'src/pages/delegate/component/Blockinfo1';
import AppTable from 'src/uikit/AppTable';
import AppTableTitle from 'src/uikit/AppTableTitle';
import Tab from '@material-ui/core/Tab';
import RowsPerPage4 from 'src/pages/delegate/component/RowsPerPage4';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import AppTableBody from 'src/uikit/AppTableBody';
import TableRowVotes from 'src/pages/delegate/component/TableRowVotes';
import ComentsAndNotes1 from 'src/pages/delegate/component/ComentsAndNotes1';

interface IDelegateVotesPageProps {
    item?: any;
}

const DelegateVotesPage: React.FC<IDelegateVotesPageProps> = ({ item, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <BackButton1 />
            </div>
            <div className={classes.div1} >
                <PageTitle2 />
            </div>
            <div className={classes.div2} >
                <Blockinfo1 />
            </div>
            <div className={classes.div3} >
                <AppTable
                    className={classes.appTable}
                    item={item}
                >
                    <AppTableTitle className={classes.appTableTitle} >
                        <Tab
                            className={classes.tab}
                            classes={{ root: classes.root1 }}
                            label={'Forged bloks'}
                        />
                        <Tab
                            className={classes.tab}
                            classes={{ root: classes.root2 }}
                            label={'Votes'}
                        />
                        <RowsPerPage4 />
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
                                    <div className={classes.div4} >
                                        <Typography className={classes.typography} >
                                            Sender
                                        </Typography>
                                        <div className={classes.custom2512896} >
                                            <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS41MDIgMTQuMDAwMkgxNC43MDhMMTQuNDMyIDEzLjcyNjJDMTUuNDA3IDEyLjU4OTIgMTYgMTEuMTE1MiAxNiA5LjUwMDIxQzE2IDUuOTEwMjEgMTMuMDkgMy4wMDAyMSA5LjUgMy4wMDAyMUM1LjkxIDMuMDAwMjEgMyA1LjkxMDIxIDMgOS41MDAyMUMzIDEzLjA5MDIgNS45MSAxNi4wMDAyIDkuNSAxNi4wMDAyQzExLjExNSAxNi4wMDAyIDEyLjU4OCAxNS40MDgyIDEzLjcyNSAxNC40MzQyTDE0LjAwMSAxNC43MDgyVjE1LjUwMDJMMTguOTk5IDIwLjQ5MTJMMjAuNDkgMTkuMDAwMkwxNS41MDIgMTQuMDAwMlpNOS41IDE0LjAwMDJDNy4wMTQgMTQuMDAwMiA1IDExLjk4NjIgNSA5LjUwMDIxQzUgNy4wMTUyMSA3LjAxNCA1LjAwMDIxIDkuNSA1LjAwMDIxQzExLjk4NSA1LjAwMDIxIDE0IDcuMDE1MjEgMTQgOS41MDAyMUMxNCAxMS45ODYyIDExLjk4NSAxNC4wMDAyIDkuNSAxNC4wMDAyWiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell}
                                    classes={{ root: classes.root4 }}
                                >
                                    <div className={classes.div4} >
                                        <Typography className={classes.typography1} >
                                            Block ID
                                        </Typography>
                                        <div className={classes.custom2512890} >
                                            <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS41MDIgMTQuMDAwMkgxNC43MDhMMTQuNDMyIDEzLjcyNjJDMTUuNDA3IDEyLjU4OTIgMTYgMTEuMTE1MiAxNiA5LjUwMDIxQzE2IDUuOTEwMjEgMTMuMDkgMy4wMDAyMSA5LjUgMy4wMDAyMUM1LjkxIDMuMDAwMjEgMyA1LjkxMDIxIDMgOS41MDAyMUMzIDEzLjA5MDIgNS45MSAxNi4wMDAyIDkuNSAxNi4wMDAyQzExLjExNSAxNi4wMDAyIDEyLjU4OCAxNS40MDgyIDEzLjcyNSAxNC40MzQyTDE0LjAwMSAxNC43MDgyVjE1LjUwMDJMMTguOTk5IDIwLjQ5MTJMMjAuNDkgMTkuMDAwMkwxNS41MDIgMTQuMDAwMlpNOS41IDE0LjAwMDJDNy4wMTQgMTQuMDAwMiA1IDExLjk4NjIgNSA5LjUwMDIxQzUgNy4wMTUyMSA3LjAxNCA1LjAwMDIxIDkuNSA1LjAwMDIxQzExLjk4NSA1LjAwMDIxIDE0IDcuMDE1MjEgMTQgOS41MDAyMUMxNCAxMS45ODYyIDExLjk4NSAxNC4wMDAyIDkuNSAxNC4wMDAyWiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell}
                                    classes={{ root: classes.root4 }}
                                >
                                    <div className={classes.div4} >
                                        <Typography className={classes.typography2} >
                                            Date / Time
                                        </Typography>
                                        <div className={classes.custom2512883} >
                                            <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg2QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell}
                                    classes={{ root: classes.root4 }}
                                >
                                    <div className={classes.div4} >
                                        <Typography className={classes.typography3} >
                                            Fee
                                        </Typography>
                                        <div className={classes.custom2512876} >
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
                                <TableRowVotes
                                    key={index}
                                    item={item}
                                />
                            )}
                        </AppTableBody>
                    </Table>
                </AppTable>
                <ComentsAndNotes1 />
            </div>
        </div>
    );
};

export default DelegateVotesPage;



