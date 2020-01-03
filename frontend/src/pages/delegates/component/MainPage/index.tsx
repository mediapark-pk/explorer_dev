import React from 'react';
import { useStyles } from 'src/pages/delegates/component/MainPage/style';
import InfoWrapper from 'src/pages/delegates/component/InfoWrapper';
import TablesWrapper from 'src/pages/delegates/component/TablesWrapper';
import PageTitle from 'src/pages/delegates/component/PageTitle';

interface IMainPageProps {}

const MainPage: React.FC<IMainPageProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <PageTitle />
            <InfoWrapper />
            <TablesWrapper />
        </div>
    );
};

export default MainPage;
