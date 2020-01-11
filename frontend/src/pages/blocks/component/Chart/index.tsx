import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStyles } from 'src/pages/blocks/component/Chart/style';
import { DataProvider } from '@app/core';
import { CHART_COLORS } from 'src/app/component/chart/colors';
import { AppRichTimeChart } from 'src/app/component/chart/TimeChart';
import { AppRichMultiTimeChart } from 'src/app/component/chart/MultiTimeChart';

interface IChartProps {
    dataProvider: DataProvider<any>;
}

export const Chart: React.FC<IChartProps> = observer(({ dataProvider }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >

            <AppRichTimeChart dataProvider={dataProvider} />

            {/* <AppRichMultiTimeChart dataProvider={dataProvider} datasetMeta={[
                { label: 'ETH', color: CHART_COLORS.blue },
                { label: 'BTC', color: CHART_COLORS.orange },
                { label: 'USD', color: CHART_COLORS.green },
            ]}>
                <h5>Market capitalization</h5>
            </AppRichMultiTimeChart> */}

        </div>
    );
});


