import React from 'react';
import { useStyles } from 'src/pages/blocks/component/BlockBlockchainInfo/style';
import { observer } from 'mobx-react-lite';
import Grid from '@material-ui/core/Grid';
import BlockchainInfo from 'src/app/component/Common/blockchainInfo';
import { useDI } from '@app/core';
import { Chart } from 'src/pages/blocks/component/Chart';
import BlockBlockchainModel from 'src/pages/blocks/component/BlockBlockchainInfo/model';
import { Block } from 'src/core/model/Block';
import { DataProvider } from '@app/core';

interface IBlocksInfoProps {
    dataProvider: DataProvider<any>;
}

const BlockBlockchainInfo: React.FC<IBlocksInfoProps> = ({ dataProvider }) => {
    const classes = useStyles({});
    const model = useDI(BlockBlockchainModel);
    React.useEffect(() => {
        model.onInit();
        return () => model.onDestroy();
    }, []);

    const items = [
        {
            titleInfo: 'Block height',
            value: model.data.id,
        },
        {
            titleInfo: 'Active nodes',
            value: model.data.totalConnected,
        },
        {
            titleInfo: 'Average stake amount',
            value: model.data.totalStakeAmount,
        },
        {
            titleInfo: 'Last block time',
            value: model.data.createdAt,
        },
        {
            titleInfo: 'Average block time',
            value: model.data.totalBlockTime,
        },
        {
            titleInfo: 'Average fee amount',
            value: model.data.totalFeeAmount,
        },
    ];

    return (
        <div className={classes.root}>
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
                    <Chart dataProvider={dataProvider} />
                </Grid>
            </Grid>
        </div>
    );
};

export default observer(BlockBlockchainInfo);
