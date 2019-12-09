import React from 'react';
import { useStyles } from 'src/pages/delegates/component/BlockAllInfo3/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import BlockAllInfo3Model from 'src/pages/delegates/component/BlockAllInfo3/model';
import AllDelegates2 from 'src/pages/delegates/component/AllDelegates2';
import StandbyDelegate2 from 'src/pages/delegates/component/StandbyDelegate2';
import VoteFreeztime2 from 'src/pages/delegates/component/VoteFreeztime2';
import ActiveDalegates2 from 'src/pages/delegates/component/ActiveDalegates2';
import VoteThreshold2 from 'src/pages/delegates/component/VoteThreshold2';
import StakeFreeztime2 from 'src/pages/delegates/component/StakeFreeztime2';
import Group81 from 'src/pages/delegates/component/Group81';

interface IBlockAllInfo3Props {
}

const BlockAllInfo3: React.FC<IBlockAllInfo3Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(BlockAllInfo3Model);

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <AllDelegates2 Blockheight={model.Blockheight} />
                <StandbyDelegate2 />
                <VoteFreeztime2 />
            </div>
            <div className={classes.div1} >
                <ActiveDalegates2 />
                <VoteThreshold2 />
                <StakeFreeztime2 />
            </div>
            <div className={classes.div2} >
                <Group81 />
            </div>
        </div>
    );
};

export default observer(BlockAllInfo3);



