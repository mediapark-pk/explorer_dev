import React from 'react';
import { useStyles } from 'src/pages/delegate/component/Blockinfo1/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import Blockinfo1Model from 'src/pages/delegate/component/Blockinfo1/model';
import Address2 from 'src/pages/delegate/component/Address2';
import Uprime1 from 'src/pages/delegate/component/Uprime1';
import TotalVotes2 from 'src/pages/delegate/component/TotalVotes2';
import TotalFee1 from 'src/pages/delegate/component/TotalFee1';
import ForgedBlocks2 from 'src/pages/delegate/component/ForgedBlocks2';
import ServerLocation2 from 'src/pages/delegate/component/ServerLocation2';
import BlockHeight2 from 'src/pages/delegate/component/BlockHeight2';
import MissedBlocks2 from 'src/pages/delegate/component/MissedBlocks2';
import Consensus2 from 'src/pages/delegate/component/Consensus2';
import Peers2 from 'src/pages/delegate/component/Peers2';
import DDKCoreVersions2 from 'src/pages/delegate/component/DDKCoreVersions2';
import Graph1 from 'src/pages/delegate/component/Graph1';

interface IBlockinfo1Props {
}

const Blockinfo1: React.FC<IBlockinfo1Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(Blockinfo1Model);

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <div className={classes.div1} >
                    <Address2 SenderId={model.SenderId} />
                </div>
                <div className={classes.div2} >
                    <Uprime1 TrnType={model.TrnType} />
                    <TotalVotes2 fee={model.fee} />
                </div>
                <div className={classes.div3} >
                    <TotalFee1 TrnType={model.TrnType} />
                    <ForgedBlocks2 fee={model.fee} />
                </div>
            </div>
            <div className={classes.div4} >
                <ServerLocation2 Amount={model.Amount} />
                <BlockHeight2 fee={model.fee} />
                <MissedBlocks2 fee={model.fee} />
            </div>
            <div className={classes.div5} >
                <Consensus2 Amount={model.Amount} />
                <Peers2 Amount={model.Amount} />
                <DDKCoreVersions2 Amount={model.Amount} />
            </div>
            <div className={classes.div6} >
                <Graph1 />
            </div>
        </div>
    );
};

export default observer(Blockinfo1);



