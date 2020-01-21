import React from 'react';
import { useStyles } from 'src/pages/transaction/component/TransactionInfo/style';
import { observer } from 'mobx-react-lite';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { VMTransaction } from 'src/common/model/VMTransaction';

interface ITransactionInfoProps {
    transaction: VMTransaction;
}

const TransactionInfo: React.FC<ITransactionInfoProps> = ({ transaction }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} sm={12} lg={12} xl={12}>
                    <Grid container item xs={12}>
                        <Grid item xs={6} sm={4} lg={3} xl={3}>
                            <div className={classes.transactionInfo}>
                                <Typography className={classes.transactionInfoTitle}>
                                    Sender
                                </Typography>
                                <Link className={classes.link} to={`/account/${transaction.senderAddress}`}>
                                    {transaction.senderAddress}
                                </Link>
                            </div>
                            <div className={classes.transactionInfo}>
                                <Typography className={classes.transactionInfoTitle}>
                                    Type
                                </Typography>
                                <Typography>
                                    {transaction.type}
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={4} lg={3} xl={3}>
                            <div className={classes.transactionInfo}>
                                <Typography className={classes.transactionInfoTitle}>
                                    Amount
                                </Typography>
                                <Typography>
                                    {transaction.asset.amount}
                                </Typography>
                            </div>
                            <div className={classes.transactionInfo}>
                                <Typography className={classes.transactionInfoTitle}>
                                    Fee
                                </Typography>
                                <Typography>
                                    {transaction.fee}
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={4} lg={3} xl={3}>
                            <div className={classes.transactionInfo}>
                                <Typography className={classes.transactionInfoTitle}>
                                    Recipient
                                </Typography>
                                <Link className={classes.link} to={`/account/${transaction.asset.recipientAddress}`}>
                                    {transaction.asset.recipientAddress}
                                </Link>
                            </div>
                            <div className={classes.transactionInfo}>
                                <Typography className={classes.transactionInfoTitle}>
                                    Block forger
                                </Typography>
                                <Typography>
                                    {transaction.asset.delegate.username}
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={4} lg={3} xl={3}>
                            <div className={classes.transactionInfo}>
                                <Typography className={classes.transactionInfoTitle}>
                                    Date/Time
                                </Typography>
                                <Typography>
                                    {transaction.createdAt.humanize()}
                                </Typography>
                            </div>
                            <div className={classes.transactionInfo}>
                                <Typography className={classes.transactionInfoTitle}>
                                    Block ID
                                </Typography>
                                <Typography>
                                    {transaction.blockId}
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default observer(TransactionInfo);
