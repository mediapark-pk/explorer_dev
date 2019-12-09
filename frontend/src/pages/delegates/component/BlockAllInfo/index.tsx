import React from 'react';
import { useStyles } from 'src/pages/delegates/component/BlockAllInfo/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import BlockAllInfoModel from 'src/pages/delegates/component/BlockAllInfo/model';
import AllDelegates from 'src/pages/delegates/component/AllDelegates';
import StandbyDelegate from 'src/pages/delegates/component/StandbyDelegate';
import VoteFreeztime from 'src/pages/delegates/component/VoteFreeztime';
import ActiveDalegates from 'src/pages/delegates/component/ActiveDalegates';
import VoteThreshold from 'src/pages/delegates/component/VoteThreshold';
import StakeFreeztime from 'src/pages/delegates/component/StakeFreeztime';
import Group8 from 'src/pages/delegates/component/Group8';

interface IBlockAllInfoProps {
}

const BlockAllInfo: React.FC<IBlockAllInfoProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(BlockAllInfoModel);

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <AllDelegates Blockheight={model.Blockheight} />
                <StandbyDelegate />
                <VoteFreeztime />
            </div>
            <div className={classes.div1} >
                <ActiveDalegates />
                <VoteThreshold />
                <StakeFreeztime />
            </div>
            <div className={classes.div2} >
                <Group8 />
            </div>
        </div>
    );
};

export default observer(BlockAllInfo);



