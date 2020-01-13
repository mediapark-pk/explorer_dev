import React from 'react';
import { useStyles } from 'src/app/component/chart/RatingDiagram/style';
import { AppChartDoughnut, AppChart } from '@app/ui-kit';
import { AppChartDoughnutModel } from 'src/app/component/chart/RatingDiagram/model';
import { ratingDiagramconfigFunction } from 'src/app/component/chart/RatingDiagram/config';

interface IRatingDiagramProps {}

const RatingDiagram: React.FC<IRatingDiagramProps> = ({ }) => {
    const classes = useStyles({});

    const MOCK_dataProvider = {
        repository: {
            data: [[33, 20, 12, 10, 7, 5, 4, 3, 2, 2]],
        }
    };

    const model = new AppChartDoughnutModel(MOCK_dataProvider);

    return (
        <div className={classes.root} >
            <h6 className={classes.chartTitle}>
                TOP<br/>
                <big style={{fontSize: '190%'}}>10</big>
            </h6>
            <AppChart model={model} className={classes.chart}>
                <AppChartDoughnut configFunction={ratingDiagramconfigFunction} />
            </AppChart>
        </div>
    );
};

export default RatingDiagram;
