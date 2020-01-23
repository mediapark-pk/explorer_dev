import React from 'react';
import { useStyles } from 'src/pages/transactions/component/TransactionsTable/style';
import { observer } from 'mobx-react-lite';
import { AppTable } from '@app/ui-kit';
import { AppTableTitle } from '@app/ui-kit';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import { AppTableBody } from '@app/ui-kit';
import { AppTablePaginator, AppTableSearchLabel, AppTableSortLabel } from '@app/ui-kit/src';
import { useModel } from '@app/core/src';
import TransactionsTableModel from 'src/pages/transactions/component/TransactionsTable/model';
import { TransactionsMode } from 'src/common/repository/TransactionsRepository';
import { Link } from 'react-router-dom';
import { VMTransaction } from 'src/common/model/VMTransaction';

interface ITransactionsTableProps {

}

const TransactionsTable: React.FC<ITransactionsTableProps> = ({}) => {
    const classes = useStyles({});
    const transactionsTableModel = useModel(TransactionsTableModel);

    return (
        <div className={classes.root}>
            <AppTable
                className={classes.appTable}
                dataProvider={transactionsTableModel.dataProvider}
            >
                <AppTableTitle className={classes.appTableTitle}>
                    <Tabs
                        value={transactionsTableModel.currentTab}
                        onChange={(event, newValue) =>
                            transactionsTableModel.updateTab(newValue)
                        }
                        className={classes.tabs}
                        TabIndicatorProps={{
                            className: classes.tabIndicator
                        }}
                    >
                        <Tab
                            className={classes.tab}
                            label={'All transactions'}
                            value={TransactionsMode.AllTransactions}
                        />
                        <Tab
                            className={classes.tab}
                            label={'Send'}
                            value={TransactionsMode.Send}
                        />
                        <Tab
                            className={classes.tab}
                            label={'Stake'}
                            value={TransactionsMode.Stake}
                        />
                        <Tab
                            className={classes.tab}
                            label={'Vote'}
                            value={TransactionsMode.Vote}
                        />
                        <Tab
                            className={classes.tab}
                            label={'Downvote'}
                            value={TransactionsMode.Downvote}
                        />
                        <Tab
                            className={classes.tab}
                            label={'Signature'}
                            value={TransactionsMode.Signature}
                        />
                        <Tab
                            className={classes.tab}
                            label={'Registration'}
                            value={TransactionsMode.Registration}
                        />
                        <Tab
                            className={classes.tab}
                            label={'Delegate'}
                            value={TransactionsMode.Delegate}
                        />
                    </Tabs>
                    <AppTablePaginator/>
                </AppTableTitle>
                <Table className={classes.table}>
                    <TableHead className={classes.tableHead}>
                        <TableRow
                            className={classes.tableRow}
                        >
                            <TableCell
                                className={classes.tableHeadTitle}
                            >
                                <AppTableSearchLabel field='blockId'>
                                    Block
                                </AppTableSearchLabel>
                            </TableCell>
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
                                    <Link className={classes.link} to={`/block/${item.blockId}`}>
                                        {item.blockId}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link className={classes.link} to={`/transaction/${item.id}`}>
                                        {item.id}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link className={classes.link} to={`/account/${item.senderAddress}`}>
                                        {item.senderAddress}
                                    </Link>
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

export default observer(TransactionsTable);
