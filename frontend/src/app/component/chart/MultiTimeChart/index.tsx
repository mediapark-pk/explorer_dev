import React, { ReactNode } from 'react';
import { AppRichTimeChart } from 'src/app/component/chart/TimeChart';
import { observer } from 'mobx-react-lite';
import { mainChartConfigFunction, minimapConfigFunction } from 'src/app/component/chart/MultiTimeChart/config';
import { DataProvider } from '@app/core';
import { AppChartDatasetMeta, AppDatasetSelector } from '@app/ui-kit';

interface IAppRichMultiTimeChartProps {
    className?: string;
    dataProvider: DataProvider<any>;
    datasetMeta: Array<AppChartDatasetMeta>;
    children?: ReactNode;
}

export const AppRichMultiTimeChart: React.FC<IAppRichMultiTimeChartProps> = observer((
    { className, dataProvider, children, datasetMeta }
) => {
    return (
        <AppRichTimeChart
            className={className}
            dataProvider={dataProvider}
            mainChartConfigFunction={mainChartConfigFunction}
            minimapConfigFunction={minimapConfigFunction}
        >
            {children}
            <AppDatasetSelector datasetMeta={datasetMeta} />
        </AppRichTimeChart>
    );
});
