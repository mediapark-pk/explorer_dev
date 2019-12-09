import React from 'react';
import { useStyles } from 'src/pages/delegates/component/BlockAllBlocks/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import BlockAllBlocksModel from 'src/pages/delegates/component/BlockAllBlocks/model';
import AppTable from 'src/uikit/AppTable';
import AppTableTitle from 'src/uikit/AppTableTitle';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import RowsPerPage from 'src/pages/delegates/component/RowsPerPage';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import { Delegates } from 'src/core/model/Delegates';
import AppTableBody from 'src/uikit/AppTableBody';
import TableRow2 from 'src/pages/delegates/component/TableRow2';

interface IBlockAllBlocksProps {
}

const BlockAllBlocks: React.FC<IBlockAllBlocksProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(BlockAllBlocksModel);
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
                    <RowsPerPage />
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
                                        Delegate address
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root4 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography1} >
                                        Delegate name
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root4 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography2} >
                                        Status
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableCell}
                                classes={{ root: classes.root4 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography3} >
                                        In active round
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableRow}
                                classes={{ root: classes.root4 }}
                            >
                                <div className={classes.div1} >
                                    <Typography className={classes.typography4} >
                                        Votes
                                    </Typography>
                                    <div className={classes.custom2511438} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg2QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableRow}
                                classes={{ root: classes.root4 }}
                            >
                                <div className={classes.div1} >
                                    <Typography className={classes.typography5} >
                                        Uptime
                                    </Typography>
                                    <div className={classes.custom2511445} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg2QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableRow}
                                classes={{ root: classes.root4 }}
                            >
                                <div className={classes.div1} >
                                    <Typography className={classes.typography6} >
                                        Forged blocks
                                    </Typography>
                                    <div className={classes.custom2511429} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg2QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableRow}
                                classes={{ root: classes.root4 }}
                            >
                                <div className={classes.div1} >
                                    <Typography className={classes.typography7} >
                                        Missed blocks
                                    </Typography>
                                    <div className={classes.custom2511422} >
                                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTEyIDE0TDE2LjIzMTggMTkuMDc4MUMxNi42MzE2IDE5LjU1NzkgMTcuMzY4NCAxOS41NTc5IDE3Ljc2ODIgMTkuMDc4MUwyMiAxNEwxMiAxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggNi45NDc3MiAxNy41NTIzIDYuNSAxNyA2LjVDMTYuNDQ3NyA2LjUgMTYgNi45NDc3MiAxNiA3LjVIMThaTTE4IDE0VjcuNUgxNlYxNEgxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDE1LjVDNiAxNi4wNTIzIDYuNDQ3NzIgMTYuNSA3IDE2LjVDNy41NTIyOCAxNi41IDggMTYuMDUyMyA4IDE1LjVMNiAxNS41Wk02IDhMNiAxNS41TDggMTUuNUw4IDhMNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDlMNy43NjgyMiAzLjkyMTg2QzcuMzY4NDMgMy40NDIxMSA2LjYzMTU3IDMuNDQyMTEgNi4yMzE3OCAzLjkyMTg3TDIgOUwxMiA5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K'/>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <AppTableBody className={classes.appTableBody} >
                        {(item: Delegates, index: number) => (
                            <TableRow2 key={index} />
                        )}
                    </AppTableBody>
                </Table>
            </AppTable>
        </div>
    );
};

export default observer(BlockAllBlocks);



