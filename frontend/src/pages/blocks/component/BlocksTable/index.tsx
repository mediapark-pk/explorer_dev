import React from 'react';
import { useStyles } from 'src/pages/blocks/component/BlocksTable/style';
import { observer } from 'mobx-react-lite';
import { DataProvider } from '@app/core';
import { Table, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import { AppTable, AppTableBody, AppTableTitle, AppTablePaginator, AppTableSortLabel, AppTableSearchLabel } from '@app/ui-kit';
import { Link } from 'react-router-dom';
import { VMBlock } from 'src/common/model/VMBlock';

interface IBlocksTableProps {
    dataProvider: DataProvider<VMBlock>;
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
                                    <AppTableSortLabel columnId='height'>
                                        Height
                                    </AppTableSortLabel>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={classes.tableHeadTitle}>
                                    <AppTableSearchLabel field='id' >
                                        Block Id
                                    </AppTableSearchLabel>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={classes.tableHeadTitle}>
                                    <AppTableSearchLabel field='delegate' >
                                        Forget by
                                    </AppTableSearchLabel>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={classes.tableHeadTitle}>
                                    <AppTableSortLabel columnId='createdAt'>
                                        Time
                                    </AppTableSortLabel>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={classes.tableHeadTitle}>
                                    <AppTableSortLabel columnId='transactionCount'>
                                        Txn
                                    </AppTableSortLabel>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={classes.tableHeadTitle}>
                                    <AppTableSortLabel columnId='amount'>
                                        Volume
                                    </AppTableSortLabel>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={classes.tableHeadTitle}>
                                    <AppTableSortLabel columnId='fee'>
                                        Fee
                                    </AppTableSortLabel>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <AppTableBody className={classes.appTableBody}>
                        {(item: VMBlock, index: number) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Typography>
                                        {item.height}
                                    </Typography>
                                </TableCell>
                                <TableCell className={classes.contrast}>
                                    <Link className={classes.link} to={`/block/${item.id}`}>
                                        { item.id }
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {item.delegate.username}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {item.createdAt.humanize()}
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
