import React from 'react';
import { useStyles } from 'src/pages/transactions/component/BlockAllInfo4/style';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import BlockAllInfo4Model from 'src/pages/transactions/component/BlockAllInfo4/model';
import TotalTxnNumber from 'src/pages/transactions/component/TotalTxnNumber';
import AverageTxnPerDay from 'src/pages/transactions/component/AverageTxnPerDay';
import SendsToday from 'src/pages/transactions/component/SendsToday';
import TotalTxnVolume from 'src/pages/transactions/component/TotalTxnVolume';
import AverageTxnPerBlock from 'src/pages/transactions/component/AverageTxnPerBlock';
import VotesToday from 'src/pages/transactions/component/VotesToday';
import Graph3 from 'src/pages/transactions/component/Graph3';

interface IBlockAllInfo4Props {
}

const BlockAllInfo4: React.FC<IBlockAllInfo4Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(BlockAllInfo4Model);

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <TotalTxnNumber Blockheight={model.Blockheight} />
                <AverageTxnPerDay />
                <SendsToday />
            </div>
            <div className={classes.div1} >
                <TotalTxnVolume />
                <AverageTxnPerBlock />
                <VotesToday />
            </div>
            <div className={classes.div2} >
                <Graph3 />
            </div>
        </div>
    );
};

export default observer(BlockAllInfo4);



