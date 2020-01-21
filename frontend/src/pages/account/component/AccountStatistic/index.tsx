import React from 'react';
import { useStyles } from 'src/pages/account/component/AccountStatistic/style';
import { observer } from 'mobx-react-lite';
import AccountStatisticModel from 'src/pages/account/component/AccountStatistic/model';
import Grid from '@material-ui/core/Grid';
import BlockchainInfo from 'src/app/component/Common/blockchainInfo';
import Typography from '@material-ui/core/Typography';
import { useModel } from '@app/core/src';
import { VMAccount } from 'src/common/model/VMAccount';

interface IAccountStatisticProps {
    account: VMAccount;
}

const AccountStatistic: React.FC<IAccountStatisticProps> = ({ account }) => {
    const classes = useStyles({});
    const model = useModel(AccountStatisticModel);

    const items = [
        {
            titleInfo: 'Total In',
            value: model.data.totalIn,
        },
        {
            titleInfo: 'Total Out',
            value: model.data.totalOut,
        },
        {
            titleInfo: 'Total Stake',
            value: model.data.totalStake,
        },
        {
            titleInfo: 'Total Group',
            value: model.data.totalGroup,
        },
        {
            titleInfo: 'Total Airdrop Reward',
            value: model.data.totalAirdropReward,
        },
        {
            titleInfo: 'Total Stake Reward',
            value: model.data.totalStakeReward,
        },
    ];
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} sm={12} lg={12} xl={12}>
                    <Grid container item xs={12}>
                        <div className={classes.blockchainInfo}>
                            <Typography className={classes.blockchainInfoTitle}>
                                Balance
                            </Typography>
                            <Typography>
                                {account.actualBalance}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid container item xs={12}>
                        <div className={classes.blockchainInfo}>
                            <Typography className={classes.blockchainInfoTitle}>
                                Public Key
                            </Typography>
                            <Typography>
                                {account.publicKey}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid container item xs={12}>
                        {items.map((item, index) => (
                            <Grid item xs={4} sm={4} lg={4} xl={4} key={index}>
                                <BlockchainInfo titleInfo={item.titleInfo} value={item.value}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default observer(AccountStatistic);
