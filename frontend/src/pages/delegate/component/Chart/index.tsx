import React from 'react';
import { useStyles } from 'src/pages/delegate/component/Chart/style';
import { useModel } from '@app/core';
import ChartModel from 'src/pages/delegate/component/Chart/model';
import { AppChartTime } from '@app/ui-kit';

interface IInfoWrapperProps {}

const InfoWrapper: React.FC<IInfoWrapperProps> = ({ }) => {
    const classes = useStyles({});
    const model = useModel(ChartModel);

    return (        
        <div className={classes.root} >
            <AppChartTime dataProvider={model.dataProvider} config={model.chartConfig} />
        </div>
    );
};

export default InfoWrapper;
