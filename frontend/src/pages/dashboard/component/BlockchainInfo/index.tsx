import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/BlockchainInfo/style';
import { Grid } from '@material-ui/core';
import { BlockchainInfoModel } from 'src/pages/dashboard/component/BlockchainInfo/model';
import { useModel } from '@app/core';
import Skeleton from 'src/common/component/Skeleton';
import { observer } from 'mobx-react-lite';

interface IBlockchaninInfoProps {}

const BlockchaninInfo: React.FC<IBlockchaninInfoProps> = ({ }) => {
    const classes = useStyles({});
    const model = useModel(BlockchainInfoModel);

    const data = [
        {
            label: 'Market Capitalization',
            value: () => `${model.marketCap} $`,
        },
        {
            label: 'Total Stakeholders',
            value: (info) => info.totalStakeHolders,
        },
        {
            label: 'Circulating Supply',
            value: (info) => `${info.circulatingSupply}/${info.totalSupply} DDK`,
        },
        {
            label: 'Coin Holders',
            value: (info) => info.totalStakeHolders,
        },
        {
            label: 'Total staked',
            value: (info) => `${info.totalStakeAmount} DDK`,
        },
        {
            label: 'Airdrop reward',
            value: (info) => `${info.airdropBalance}/400 000 DDK`,
        },
    ];

    return (
        <Grid container wrap='nowrap' justify='space-between' className={classes.root} >
            {data.map(({ label, value }, index) => (
                <Grid key={index} container item wrap='nowrap' className={classes.wrapper} >
                    <div className={classes.label}>{label}:</div>
                    {!model.isLoading && model.blockchainInfo
                        ? (<div className={classes.value}>{value(model.blockchainInfo)}</div>)
                        : (<Skeleton width={90} left={4} top={2} height={14} />)
                    }
                </Grid>
            ))}
        </Grid>
    );
};

export default observer(BlockchaninInfo);
