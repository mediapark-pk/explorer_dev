import React from 'react';
import { useStyles } from 'src/pages/statistics/component/StatisticsPage/style';
import PageTitle3 from 'src/pages/statistics/component/PageTitle3';
import BlockAllInfo1 from 'src/pages/statistics/component/BlockAllInfo1';

interface IStatisticsPageProps {
}

const StatisticsPage: React.FC<IStatisticsPageProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <PageTitle3 />
            <BlockAllInfo1 />
        </div>
    );
};

export default StatisticsPage;



