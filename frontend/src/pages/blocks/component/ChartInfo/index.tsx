import React from 'react';
import { useStyles } from 'src/pages/blocks/component/ChartInfo/style';

interface IChartInfoProps {
}

const ChartInfo: React.FC<IChartInfoProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
        </div>
    );
};

export default ChartInfo;
