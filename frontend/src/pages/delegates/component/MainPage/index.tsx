import React from 'react';
import { useStyles } from 'src/pages/delegates/component/MainPage/style';
import InfoWrapper from 'src/pages/delegates/component/InfoWrapper';
import MainTable from 'src/pages/delegates/component/MainTable';
import PageTitle from 'src/pages/delegates/component/PageTitle';

interface IMainPageProps {}

const MainPage: React.FC<IMainPageProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <PageTitle />
            <InfoWrapper />
            <MainTable />
        </div>
    );
};

export default MainPage;
