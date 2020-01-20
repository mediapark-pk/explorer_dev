import React from 'react';
import { useStyles } from 'src/pages/accounts/component/AccountsTable/style';
import { observer } from 'mobx-react-lite';
import { AppTable } from '@app/ui-kit';
import { AppTableTitle } from '@app/ui-kit';
import { AppTableBody } from '@app/ui-kit';
import { DataProvider } from '@app/core';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { AppTablePaginator, AppTableSearchLabel, AppTableSortLabel } from '@app/ui-kit/src';
import { VMAccount } from 'src/common/model/VMAccount';

interface IAccountsTableProps {
    dataProvider: DataProvider<VMAccount>;
}

const AccountsTable: React.FC<IAccountsTableProps> = ({ dataProvider }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root}>
            <AppTable
                className={classes.appTable}
                dataProvider={dataProvider}
            >
                <AppTableTitle className={classes.appTableTitle}>
                    <Typography>
                        Community Addresses
                    </Typography>
                    <AppTablePaginator/>
                </AppTableTitle>
                <Table className={classes.table}>
                    <TableHead className={classes.tableHead}>
                        <TableRow
                            className={classes.tableRow}
                        >
                            <TableCell className={classes.tableHeadTitle}>
                                <Typography>
                                    Rank
                                </Typography>
                            </TableCell>
                            <TableCell className={classes.tableHeadTitle}>
                                <AppTableSearchLabel field='address'>
                                    Address
                                </AppTableSearchLabel>
                            </TableCell>
                            <TableCell className={classes.tableHeadTitle}>
                                <AppTableSortLabel columnId='amount'>
                                    Balance (DDK)
                                </AppTableSortLabel>
                            </TableCell>
                            <TableCell className={classes.tableHeadTitle}>
                                <AppTableSearchLabel field='delegate'>
                                    Delegate name
                                </AppTableSearchLabel>
                            </TableCell>
                            <TableCell className={classes.tableHeadTitle}>
                                <AppTableSortLabel columnId='txncount'>
                                    Txn count
                                </AppTableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <AppTableBody className={classes.appTableBody}>
                        {(item: VMAccount, index: number) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Typography>
                                        {index + 1}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Link className={classes.link} to={`/account/${item.address}`}>
                                        {item.address}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {item.actualBalance}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {item.delegateName}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {item.transactionCount}
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

export default observer(AccountsTable);
