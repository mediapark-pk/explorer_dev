import React from 'react';
import { useStyles } from 'src/pages/blocks/component/Chart/style';
import ChartInfo from 'src/pages/blocks/component/ChartInfo';

interface IChartProps {
}

const Chart: React.FC<IChartProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
                <ChartInfo />
        </div>
    );
};

export default Chart;



