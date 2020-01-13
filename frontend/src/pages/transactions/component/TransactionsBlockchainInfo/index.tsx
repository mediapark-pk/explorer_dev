import React from 'react';
import { useStyles } from 'src/pages/transactions/component/TransactionsBlockchainInfo/style';
import { observer } from 'mobx-react-lite';
import TransactionsBlockchainInfoModel from 'src/pages/transactions/component/TransactionsBlockchainInfo/model';
import { useModel } from '@app/core/src';
import Grid from '@material-ui/core/Grid';
import BlockchainInfo from 'src/app/component/Common/blockchainInfo';

interface ITransactionsBlockchainInfoProps {
}

const TransactionsBlockchainInfo: React.FC<ITransactionsBlockchainInfoProps> = ({ }) => {
    const classes = useStyles({});
    const model = useModel(TransactionsBlockchainInfoModel);

    const items = [
        {
            titleInfo: 'Total txn number',
            value: model.data.totalTxnNumber,
        },
        {
            titleInfo: 'Total txn volume',
            value: model.data.totalTxnVolume,
        },
        {
            titleInfo: 'Average txn per day',
            value: model.data.averageTxnPerDay,
        },
        {
            titleInfo: 'Average txn per block',
            value: model.data.averageTxnPerBock,
        },
        {
            titleInfo: 'Sent today',
            value: model.data.sentToday,
        },
        {
            titleInfo: 'Votes today',
            value: model.data.votesToday,
        },
    ];

    return (
        <div className={classes.root} >
             <Grid container spacing={1}>
                <Grid container item xs={12} sm={12} lg={4} xl={4}>
                    <Grid container item xs={12}>
                       {items.map((item, index) => (
                            <Grid item xs={6} sm={4} lg={6} xl={6} key={index}>
                                <BlockchainInfo titleInfo={item.titleInfo} value={item.value}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid container item lg={8} xl={8} alignItems='flex-start'>
                </Grid>
            </Grid>
        </div>
    );
};

export default observer(TransactionsBlockchainInfo);
