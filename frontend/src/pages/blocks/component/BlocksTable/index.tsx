import React from 'react';
import { useStyles } from 'src/pages/blocks/component/BlocksTable/style';
import { observer } from 'mobx-react-lite';
import { Block } from 'src/core/model/Block';
import { DataProvider } from '@app/core';
import { Table, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import { AppTable, AppTableBody, AppTableTitle, AppTablePaginator } from 'ui-kit';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import SearchIcon from '@material-ui/icons/Search';

interface IBlocksTableProps {
    dataProvider: DataProvider<Block>;
}

const BlocksTable: React.FC<IBlocksTableProps> = ({ dataProvider }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root}>
            <AppTable
                className={classes.appTable}
                dataProvider={dataProvider}
            >
                <AppTableTitle className={classes.appTableTitle}>
                    <Typography>
                        All blocks
                    </Typography>
                    <AppTablePaginator />
                </AppTableTitle>
                <Table className={classes.table}>
                    <TableHead className={classes.tableHead}>
                        <TableRow
                            className={classes.tableRow}
                        >
                            <TableCell>
                                <div className={classes.tableHeadTitle}>
                                    <Typography>
                                        Height
                                    </Typography>
                                    <ImportExportIcon/>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={classes.tableHeadTitle}>
                                    <Typography>
                                        Block ID
                                    </Typography>
                                    <SearchIcon/>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={classes.tableHeadTitle}>
                                    <Typography>
                                        Time
                                    </Typography>
                                    <ImportExportIcon/>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={classes.tableHeadTitle}>
                                    <Typography>
                                        Txn
                                    </Typography>
                                    <ImportExportIcon/>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={classes.tableHeadTitle}>
                                    <Typography>
                                        Volume
                                    </Typography>
                                    <ImportExportIcon/>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={classes.tableHeadTitle}>
                                    <Typography>
                                        Fee
                                    </Typography>
                                    <ImportExportIcon/>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <AppTableBody className={classes.appTableBody}>
                        {(item: Block, index: number) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Typography>
                                        {item.height}
                                    </Typography>
                                </TableCell>
                                <TableCell className={classes.contrast}>
                                    <Typography>
                                        {item.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {item.createdAt}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {item.transactionCount}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {item.amount}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {item.fee}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        )}
                    </AppTableBody>
                </Table>
            </AppTable>
        </div>
    );
};

export default observer(BlocksTable);
