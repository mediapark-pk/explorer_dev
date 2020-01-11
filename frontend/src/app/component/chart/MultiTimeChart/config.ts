import { CHART_COLORS, CHART_LINE_COLORS } from '../colors';
import { AppChartDatasets } from '@app/ui-kit';
import { defaultAppChartLineConfig as defaultUikitAppChartLineConfig } from '@app/ui-kit';
import { defaultAppChartMinimapConfig as defaultUikitAppChartMinimapConfig } from '@app/ui-kit';

const datasetDefaults = {
    data: [],
    hidden: false,
    backgroundColor: 'transparent',
    borderColor: CHART_COLORS.blue,
    borderWidth: 1,
    lineTension: 0,
};

const generalChartConfigFunction = (
    datasets: AppChartDatasets,
    defaultConfig: Chart.ChartConfiguration
): Chart.ChartConfiguration => ({
    ...defaultConfig,
    ...{
        data: {
            datasets: datasets.map((datasetItem, index: number) => ({
                ...datasetDefaults,
                ...{
                    data: datasetItem,
                    borderColor: CHART_LINE_COLORS[index % CHART_LINE_COLORS.length],
                }
            }))
        }
    }
});

export const mainChartConfigFunction = (
    datasets: AppChartDatasets,
): Chart.ChartConfiguration => generalChartConfigFunction(datasets, defaultUikitAppChartLineConfig);

export const minimapConfigFunction = (
    datasets: AppChartDatasets,
): Chart.ChartConfiguration => generalChartConfigFunction(datasets, defaultUikitAppChartMinimapConfig);
