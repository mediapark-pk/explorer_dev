import React from 'react';
import { useStyles } from 'src/pages/block/component/BlockTransactions/style';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import BlockTransactionsModel from 'src/pages/block/component/BlockTransactions/model';
import { AppTable } from '@app/ui-kit';
import { AppTableTitle } from '@app/ui-kit';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Transaction } from 'src/core/model/Transaction';
import { AppTableBody } from '@app/ui-kit';
import { AppTablePaginator, AppTableSearchLabel, AppTableSortLabel } from '@app/ui-kit/src';
import { Link } from 'react-router-dom';

interface IBlockTransactionsProps {
}

const BlockTransactions: React.FC<IBlockTransactionsProps> = ({}) => {
    const classes = useStyles({});
    const model = useDI(BlockTransactionsModel);

    return (
        <div className={classes.root}>
            <AppTable
                className={classes.appTable}
                dataProvider={model.dataProvider}
            >
                <AppTableTitle className={classes.appTableTitle}>
                    <Typography>
                        Block transactions
                    </Typography>
                    <Typography>
                        {model.dataProvider.repository.totalCount}
                    </Typography>
                    <AppTablePaginator/>
                </AppTableTitle>
                <Table className={classes.table}>
                    <TableHead className={classes.tableHead}>
                        <TableRow
                            className={classes.tableRow}
                        >
                            <TableCell className={classes.tableHeadTitle}>
                                <AppTableSearchLabel field='id'>
                                    Transaction
                                </AppTableSearchLabel>
                            </TableCell>
                            <TableCell className={classes.tableHeadTitle}>
                                <AppTableSearchLabel field='address'>
                                    Sender
                                </AppTableSearchLabel>
                            </TableCell>
                            <TableCell className={classes.tableHeadTitle}>
                                <AppTableSearchLabel field='address'>
                                    Recipient
                                </AppTableSearchLabel>
                            </TableCell>
                            <TableCell className={classes.tableHeadTitle}>
                                <AppTableSortLabel columnId='type'>
                                    Date / Time
                                </AppTableSortLabel>
                            </TableCell>
                            <TableCell className={classes.tableHeadTitle}>
                                <AppTableSortLabel columnId='type'>
                                    Type
                                </AppTableSortLabel>
                            </TableCell>
                            <TableCell className={classes.tableHeadTitle}>
                                <AppTableSortLabel columnId='amount'>
                                    Amount
                                </AppTableSortLabel>
                            </TableCell>
                            <TableCell className={classes.tableHeadTitle}>
                                <AppTableSortLabel columnId='fee'>
                                    Fee
                                </AppTableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <AppTableBody className={classes.appTableBody}>
                        {(item: Transaction, index: number) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Link className={classes.link} to={`/transaction/${item.id}`}>
                                        {item.id}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link className={classes.link} to={`/account/${item.senderAddress}`}>
                                        {item.senderAddress}
                                    </Link>
                                    <Typography>

                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    {item.asset.recipientAddress
                                        ?
                                        <Link className={classes.link} to={`/account/${item.asset.recipientAddress}`}>
                                            {item.asset.recipientAddress}
                                        </Link>
                                        :
                                        null
                                    }
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {item.createdAt}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {item.type}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {item.asset.amount}
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

export default observer(BlockTransactions);
