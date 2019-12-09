import React from 'react';
import { useStyles } from 'src/pages/blocks/component/BlockAllInfo5/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import BlockAllInfo5Model from 'src/pages/blocks/component/BlockAllInfo5/model';
import BlockHeight4 from 'src/pages/blocks/component/BlockHeight4';
import ActiveNodes from 'src/pages/blocks/component/ActiveNodes';
import AverageStakeAmount from 'src/pages/blocks/component/AverageStakeAmount';
import LastBlockTime from 'src/pages/blocks/component/LastBlockTime';
import AverageBlockTime from 'src/pages/blocks/component/AverageBlockTime';
import AverageFeeAmount from 'src/pages/blocks/component/AverageFeeAmount';
import Graph4 from 'src/pages/blocks/component/Graph4';

interface IBlockAllInfo5Props {
}

const BlockAllInfo5: React.FC<IBlockAllInfo5Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(BlockAllInfo5Model);

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <BlockHeight4 Blockheight={model.Blockheight} />
                <ActiveNodes />
                <AverageStakeAmount />
            </div>
            <div className={classes.div1} >
                <LastBlockTime />
                <AverageBlockTime />
                <AverageFeeAmount />
            </div>
            <div className={classes.div2} >
                <Graph4 />
            </div>
        </div>
    );
};

export default observer(BlockAllInfo5);



