import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/BlockBasicInf/style';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import BlockBasicInfModel from 'src/pages/dashboard/component/BlockBasicInf/model';
import TotalSupply1 from 'src/pages/dashboard/component/TotalSupply1';
import MarketCapitalization from 'src/pages/dashboard/component/MarketCapitalization';
import TotalStakeholders1 from 'src/pages/dashboard/component/TotalStakeholders1';
import CirculatingSupply from 'src/pages/dashboard/component/CirculatingSupply';
import CoinHolders from 'src/pages/dashboard/component/CoinHolders';
import TotalStaked from 'src/pages/dashboard/component/TotalStaked';

interface IBlockBasicInfProps {
}

const BlockBasicInf: React.FC<IBlockBasicInfProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(BlockBasicInfModel);

    return (
        <div className={classes.root} >
            <TotalSupply1 totalsupply={model.totalsupply} />
            <MarketCapitalization MarketCap={model.MarketCap} />
            <TotalStakeholders1 totalstakeholders={model.totalstakeholders} />
            <CirculatingSupply Circulatingsupply={model.Circulatingsupply} />
            <CoinHolders Coinholders={model.Coinholders} />
            <TotalStaked Totalstaked={model.Totalstaked} />
        </div>
    );
};

export default observer(BlockBasicInf);



