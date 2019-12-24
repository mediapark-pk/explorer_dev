import React from 'react';
import { useStyles } from 'src/pages/blocks/component/BlockBlockchainInfo/style';
import { observer } from 'mobx-react-lite';
import Grid from '@material-ui/core/Grid';
import BlockchainInfo from 'src/app/component/Common/blockchainInfo';
import { useDI } from '@app/core';
import AddressesBlockchainInfoModel from 'src/pages/addresses/component/AddressesBlockchainInfo/model';
import { useModel } from '@app/core/src';

interface IAddressesBlockchaineInfoProps {
}

const AddressesBlockchainInfo: React.FC<IAddressesBlockchaineInfoProps> = ({}) => {
    const classes = useStyles({});
    const model = useModel(AddressesBlockchainInfoModel);

    const items = [
        {
            titleInfo: 'Total Stake Holders',
            value: model.data.totalStakeHolders,
        },
        {
            titleInfo: 'Circulating Supply',
            value: model.data.circulatingSupply,
        },
        {
            titleInfo: 'Total Staked',
            value: model.data.totalStakeAmount,
        },
        {
            titleInfo: 'Addresses Quantity',
            value: model.data.tokenHolders,
        },
        {
            titleInfo: 'Total Market Supply',
            value: model.data.totalSupply,
        },
        {
            titleInfo: 'Circulating Supply',
            value: model.data.circulatingSupply,
        },
    ];

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} sm={12} lg={12} xl={12}>
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

export default observer(AddressesBlockchainInfo);
