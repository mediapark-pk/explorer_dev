import { defaultAppChartDoughnutConfig, AppChartDatasets } from '@app/ui-kit';
import { CHART_BACKGROUND_COLORS } from '../colors';

export const ratingDiagramconfigFunction = (datasets: AppChartDatasets) => ({
    ...defaultAppChartDoughnutConfig,
    ...{
        data: {
            datasets: [{
                data: datasets[0],
                backgroundColor: CHART_BACKGROUND_COLORS,
                borderWidth: 0
            }]
        }
    }
});
