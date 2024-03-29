import React from 'react';
import { useStyles } from 'src/pages/account/component/AccountTable/style';
import { AppTable } from '@app/ui-kit';
import { AppTableTitle } from '@app/ui-kit';
import Tab from '@material-ui/core/Tab';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import { AppTableBody } from '@app/ui-kit';
import { VMTransaction } from 'src/common/model/VMTransaction';
import { useDI } from '@app/core';
import AccountPageModel from 'src/pages/account/component/AccountPage/model';
import Tabs from '@material-ui/core/Tabs';
import { observer } from 'mobx-react-lite';
import { AppTablePaginator, AppTableSearchLabel, AppTableSortLabel } from '@app/ui-kit/src';
import { Link } from 'react-router-dom';

interface IAccountTableProps {

}

const AccountTable: React.FC<IAccountTableProps> = ({}) => {
    const classes = useStyles({});
    const model = useDI(AccountPageModel);

    return (
        <div className={classes.root}>
            <AppTable
                className={classes.appTable}
                dataProvider={model.dataProvider}
            >
                <AppTableTitle className={classes.appTableTitle}>
                    <Tabs
                        value={model.currentTab}
                        onChange={(event, newValue) =>
                            model.updateTab(newValue)
                        }
                        className={classes.tabs}
                        TabIndicatorProps={{
                            className: classes.tabIndicator
                        }}
                    >
                        <Tab
                            className={classes.tab}
                            label={'Sent'}
                        />
                        <Tab
                            className={classes.tab}
                            label={'Recieved'}
                        />
                    </Tabs>
                    <AppTablePaginator/>
                </AppTableTitle>
                <Table className={classes.table}>
                    <TableHead className={classes.tableHead}>
                        <TableRow
                            className={classes.tableRow}
                        >
                            <TableCell className={classes.tableHeadTitle}>
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
                                    {model.isSentTab ? 'Sender' : 'Recipient'}
                                </AppTableSearchLabel>
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
                    <AppTableBody
                        className={classes.appTableBody}
                    >
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
                                    {model.isSentTab
                                        ?
                                        <Link className={classes.link} to={`/account/${item.senderAddress}`}>
                                            {item.senderAddress}
                                        </Link>
                                        :
                                        <Link className={classes.link} to={`/account/${item.asset.recipientAddress}`}>
                                            {item.asset.recipientAddress}
                                        </Link>
                                    }
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

export default observer(AccountTable);
