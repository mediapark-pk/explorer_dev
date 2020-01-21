import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/TransactionsTable/style';
import InfoTable from 'src/pages/dashboard/component/InfoTable';
import TransactionsTableModel from 'src/pages/dashboard/component/TransactionsTable/model';
import { useModel } from '@app/core';
import { DelegateIcon, TransactionIcon } from 'src/app/component/Icons';
import { VMTransaction } from 'src/common/model/VMTransaction';
import { TableRow, TableCell, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

interface ITransactionsTableProps {}

const DelegatesTable: React.FC<ITransactionsTableProps> = ({ }) => {
    const classes = useStyles({});
    const model = useModel(TransactionsTableModel);

    return (
        <div className={classes.root} >
            <InfoTable
                Icon={<TransactionIcon/>}
                label={'Transactions'}
                tip={'in total'}
                dataProvider={model.dataProvider}
                link={'/transactions'}
                headers={[
                    ['Block', classes.tLink],
                    ['From', classes.tLink],
                    ['To', classes.tLink],
                    ['Time', classes.tTime],
                    ['Fee', classes.tFee]
                ]}
            >
                {(txn: VMTransaction) => (
                    <TableRow key={txn.id} >
                        <TableCell className={classes.tLink} >
                            <NavLink to={`/block/${txn.blockId}`} >
                                <Typography className={classes.link} >
                                    {txn.blockId}
                                </Typography>
                            </NavLink>
                            <div className={classes.shadow}></div>
                        </TableCell>
                        <TableCell className={classes.tLink} >
                            <NavLink to={`/delegates/${txn.senderAddress}`} >
                                <Typography className={classes.link} >
                                    {txn.senderAddress}
                                </Typography>
                            </NavLink>
                            <div className={classes.shadow}></div>
                        </TableCell>
                        <TableCell className={classes.tLink} >
                            <NavLink to={`/delegates/${txn.senderAddress}`} >
                                <Typography className={classes.link} >
                                    {txn.senderAddress}
                                </Typography>
                            </NavLink>
                            <div className={classes.shadow}></div>
                        </TableCell>
                        <TableCell className={classes.tTime} >
                            <Typography>
                                {txn.createdAt.humanize()}
                            </Typography>
                        </TableCell>
                        <TableCell className={classes.tFee} >
                            <Typography>
                                {txn.fee}
                            </Typography>
                        </TableCell>
                    </TableRow>
               )}
            </InfoTable>
        </div>
    );
};

export default DelegatesTable;
