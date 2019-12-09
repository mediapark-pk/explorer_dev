import React from 'react';
import { useStyles } from 'src/pages/statistics/component/BlockAllInfo1/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import BlockAllInfo1Model from 'src/pages/statistics/component/BlockAllInfo1/model';
import StatisticBlock from 'src/pages/statistics/component/StatisticBlock';
import StatisticBlock1 from 'src/pages/statistics/component/StatisticBlock1';
import StatisticBlock2 from 'src/pages/statistics/component/StatisticBlock2';
import StatisticBlock3 from 'src/pages/statistics/component/StatisticBlock3';
import StatisticBlock4 from 'src/pages/statistics/component/StatisticBlock4';
import StatisticBlock5 from 'src/pages/statistics/component/StatisticBlock5';
import StatisticBlock6 from 'src/pages/statistics/component/StatisticBlock6';
import StatisticBlock7 from 'src/pages/statistics/component/StatisticBlock7';
import StatisticBlock8 from 'src/pages/statistics/component/StatisticBlock8';
import StatisticBlock9 from 'src/pages/statistics/component/StatisticBlock9';
import StatisticBlock10 from 'src/pages/statistics/component/StatisticBlock10';
import StatisticBlock11 from 'src/pages/statistics/component/StatisticBlock11';

interface IBlockAllInfo1Props {
}

const BlockAllInfo1: React.FC<IBlockAllInfo1Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(BlockAllInfo1Model);

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <StatisticBlock />
                <StatisticBlock1 />
                <StatisticBlock2 />
                <StatisticBlock3 />
            </div>
            <div className={classes.div1} >
                <StatisticBlock4 />
                <StatisticBlock5 />
                <StatisticBlock6 />
                <StatisticBlock7 />
            </div>
            <div className={classes.div2} >
                <StatisticBlock8 />
                <StatisticBlock9 />
                <StatisticBlock10 />
                <StatisticBlock11 />
            </div>
        </div>
    );
};

export default observer(BlockAllInfo1);



