import React from 'react';
import { useStyles } from 'src/pages/transaction/component/BlockTransactions/style';
import { observer } from 'mobx-react-lite';
import { AppTable } from '@app/ui-kit';
import { AppTableTitle } from '@app/ui-kit';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { AppTableBody } from '@app/ui-kit';
import { AppTablePaginator, AppTableSearchLabel, AppTableSortLabel } from '@app/ui-kit/src';
import { useModel } from '@app/core/src';
import BlockTransactionsModel from 'src/pages/transaction/component/BlockTransactions/model';
import { Link } from 'react-router-dom';
import { VMTransaction } from 'src/common/model/VMTransaction';

interface IBlockTransactionsProps {

}

const BlockTransactions: React.FC<IBlockTransactionsProps> = ({ }) => {
    const classes = useStyles({});
    const model = useModel(BlockTransactionsModel);

    return (
        <div className={classes.root}>
            <AppTable
                className={classes.appTable}
                dataProvider={model.dataProvider}
            >
                <AppTableTitle className={classes.appTableTitle}>
                    <Typography>
                        Transactions in same block
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
                        {(item: VMTransaction, index: number) => (
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
                                    <Link className={classes.link} to={`/account/${item.asset.recipientAddress}`}>
                                        {item.asset.recipientAddress}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {item.createdAt.humanize()}
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
