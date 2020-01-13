import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/BlockCapitalization/style';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import BlockCapitalizationModel from 'src/pages/dashboard/component/BlockCapitalization/model';
import BlockTitle from 'src/pages/dashboard/component/BlockTitle';
import { AppRichMultiTimeChart } from 'src/app/component/chart/MultiTimeChart';
import { CHART_COLORS } from 'src/app/component/chart/colors';

interface IBlockCapitalizationProps {
}

const BlockCapitalization: React.FC<IBlockCapitalizationProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(BlockCapitalizationModel);

    return (
        <div className={classes.root} >
            <BlockTitle />
            <div className={classes.custom1583677}>
                <AppRichMultiTimeChart dataProvider={model.dataProvider} datasetMeta={[
                    { label: 'ETH', color: CHART_COLORS.blue },
                    { label: 'BTC', color: CHART_COLORS.orange },
                    { label: 'USD', color: CHART_COLORS.green },
                ]} />
            </div>
        </div>
    );
};

export default observer(BlockCapitalization);



