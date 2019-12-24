import React from 'react';
import { useStyles } from 'src/pages/addresses/component/AddressesTable/style';
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
import { Account } from 'src/core/model/Account';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { AppTablePaginator } from '@app/ui-kit/src';

interface IAddressesTableProps {
    dataProvider: DataProvider<Account>;
}

const AddressesTable: React.FC<IAddressesTableProps> = ({ dataProvider }) => {
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
                            <TableCell>
                                <div className={classes.tableHeadTitle}>
                                    <Typography>
                                        Rank
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={classes.tableHeadTitle}>
                                    <Typography>
                                        Address
                                    </Typography>
                                     <SearchIcon/>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={classes.tableHeadTitle}>
                                    <Typography>
                                        Balance (DDK)
                                    </Typography>
                                    <ImportExportIcon/>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <AppTableBody className={classes.appTableBody}>
                        {(item: Account, index: number) => (
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
                            </TableRow>
                        )}
                    </AppTableBody>
                </Table>
            </AppTable>
        </div>
    );
};

export default observer(AddressesTable);
