import { CHART_COLORS } from '../colors';
import { AppChartDatasets } from '@app/ui-kit';
import { defaultAppChartLineConfig as defaultUikitAppChartLineConfig } from '@app/ui-kit';
import { defaultAppChartMinimapConfig as defaultUikitAppChartMinimapConfig } from '@app/ui-kit';

// tslint:disable-next-line:no-magic-numbers
export const MSEC_IN_DAY = 24 * 60 * 60 * 1000;
export const GRADIENT_HEIGHT = 2;

export function mainChartConfigFunction(
    datasets: AppChartDatasets,
    canvasElement: HTMLCanvasElement
): Chart.ChartConfiguration {
    
    let lineCanvasContext = canvasElement.getContext('2d');
    const backgroundColor = lineCanvasContext.createLinearGradient(0, 0, 0, canvasElement.height * GRADIENT_HEIGHT);
    backgroundColor.addColorStop(0, CHART_COLORS.blue);
    backgroundColor.addColorStop(1, CHART_COLORS.blueOpaque00);

    return {
        ...defaultUikitAppChartLineConfig,
        ...{
            data: {
                datasets: [
                    {
                        data: datasets[0],
                        backgroundColor,
                        borderColor: CHART_COLORS.blue,
                        borderWidth: 2,
                        lineTension: 0,
                    }
                ]
            }
        }
    };

}

export function minimapConfigFunction(
    datasets: AppChartDatasets
): Chart.ChartConfiguration {

    return {
        ...defaultUikitAppChartMinimapConfig,
        ...{
            data: {
                datasets: [
                    {
                        data: datasets[0],
                        borderColor: CHART_COLORS.grayOpaque50,
                        backgroundColor: CHART_COLORS.grayOpaque06,
                        borderWidth: 1,
                        lineTension: 0,
                    }
                ]
            }
        }
    };

}
