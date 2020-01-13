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
        </div>
    );
});


