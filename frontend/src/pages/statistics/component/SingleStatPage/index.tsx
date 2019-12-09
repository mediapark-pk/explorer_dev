import React from 'react';
import { useStyles } from 'src/pages/statistics/component/SingleStatPage/style';
import BackButton2 from 'src/pages/statistics/component/BackButton2';
import PageTitle4 from 'src/pages/statistics/component/PageTitle4';
import Graph2 from 'src/pages/statistics/component/Graph2';

interface ISingleStatPageProps {
}

const SingleStatPage: React.FC<ISingleStatPageProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <BackButton2 />
            <PageTitle4 />
            <Graph2 />
        </div>
    );
};

export default SingleStatPage;



