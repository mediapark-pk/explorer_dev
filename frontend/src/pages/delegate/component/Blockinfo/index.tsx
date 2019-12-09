import React from 'react';
import { useStyles } from 'src/pages/delegate/component/Blockinfo/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import BlockinfoModel from 'src/pages/delegate/component/Blockinfo/model';
import Address from 'src/pages/delegate/component/Address';
import Uprime from 'src/pages/delegate/component/Uprime';
import TotalVotes from 'src/pages/delegate/component/TotalVotes';
import TotalFee from 'src/pages/delegate/component/TotalFee';
import ForgedBlocks from 'src/pages/delegate/component/ForgedBlocks';
import ServerLocation from 'src/pages/delegate/component/ServerLocation';
import BlockHeight from 'src/pages/delegate/component/BlockHeight';
import MissedBlocks from 'src/pages/delegate/component/MissedBlocks';
import Consensus from 'src/pages/delegate/component/Consensus';
import Peers from 'src/pages/delegate/component/Peers';
import DDKCoreVersions from 'src/pages/delegate/component/DDKCoreVersions';
import Graph from 'src/pages/delegate/component/Graph';

interface IBlockinfoProps {
}

const Blockinfo: React.FC<IBlockinfoProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(BlockinfoModel);

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <div className={classes.div1} >
                    <Address SenderId={model.SenderId} />
                </div>
                <div className={classes.div2} >
                    <Uprime TrnType={model.TrnType} />
                    <TotalVotes fee={model.fee} />
                </div>
                <div className={classes.div3} >
                    <TotalFee TrnType={model.TrnType} />
                    <ForgedBlocks fee={model.fee} />
                </div>
            </div>
            <div className={classes.div4} >
                <ServerLocation Amount={model.Amount} />
                <BlockHeight fee={model.fee} />
                <MissedBlocks fee={model.fee} />
            </div>
            <div className={classes.div5} >
                <Consensus Amount={model.Amount} />
                <Peers Amount={model.Amount} />
                <DDKCoreVersions Amount={model.Amount} />
            </div>
            <div className={classes.div6} >
                <Graph />
            </div>
        </div>
    );
};

export default observer(Blockinfo);



