import React from 'react';
import { useStyles } from 'src/pages/addresses/component/Blockinfo2/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import Blockinfo2Model from 'src/pages/addresses/component/Blockinfo2/model';
import Sender2 from 'src/pages/addresses/component/Sender2';
import ServerLocation4 from 'src/pages/addresses/component/ServerLocation4';
import Consensus4 from 'src/pages/addresses/component/Consensus4';
import Uprime2 from 'src/pages/addresses/component/Uprime2';
import TotalFee2 from 'src/pages/addresses/component/TotalFee2';
import ForgedBlocks4 from 'src/pages/addresses/component/ForgedBlocks4';
import MissedBlocks4 from 'src/pages/addresses/component/MissedBlocks4';
import TotalFee3 from 'src/pages/addresses/component/TotalFee3';
import ForgedBlocks5 from 'src/pages/addresses/component/ForgedBlocks5';
import MissedBlocks5 from 'src/pages/addresses/component/MissedBlocks5';
import Frame from 'src/pages/addresses/component/Frame';

interface IBlockinfo2Props {
}

const Blockinfo2: React.FC<IBlockinfo2Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(Blockinfo2Model);

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <div className={classes.div1} >
                    <Sender2 Amount={model.Amount} />
                    <ServerLocation4 Amount={model.Amount} />
                    <Consensus4 Amount={model.Amount} />
                </div>
                <div className={classes.div2} >
                    <Uprime2 />
                </div>
                <div className={classes.div3} >
                    <TotalFee2 TrnType={model.TrnType} />
                    <ForgedBlocks4 TrnType={model.TrnType} />
                    <MissedBlocks4 TrnType={model.TrnType} />
                </div>
                <div className={classes.div4} >
                    <TotalFee3 TrnType={model.TrnType} />
                    <ForgedBlocks5 TrnType={model.TrnType} />
                    <MissedBlocks5 TrnType={model.TrnType} />
                </div>
            </div>
            <div className={classes.div5} >
                <Frame />
            </div>
        </div>
    );
};

export default observer(Blockinfo2);



