import React from 'react';
import { useStyles } from 'src/pages/statistics/component/LegendAndInf/style';
import Legend from 'src/pages/statistics/component/Legend';
import Legend1 from 'src/pages/statistics/component/Legend1';
import Legend2 from 'src/pages/statistics/component/Legend2';
import GraphInfo from 'src/pages/statistics/component/GraphInfo';

interface ILegendAndInfProps {
}

const LegendAndInf: React.FC<ILegendAndInfProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Legend />
                <Legend1 />
                <Legend2 />
            </div>
            <GraphInfo />
        </div>
    );
};

export default LegendAndInf;



