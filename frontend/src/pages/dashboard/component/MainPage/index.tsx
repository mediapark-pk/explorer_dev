import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/MainPage/style';
import BlockchainInfo from 'src/pages/dashboard/component/BlockchainInfo';
import Filter from 'src/pages/dashboard/component/DashboardSearch';
import TablesWrapper from 'src/pages/dashboard/component/TablesWrapper';
import CurencyConvertor from 'src/pages/dashboard/component/CurencyConvertor';
import CapitalizationChart from 'src/pages/dashboard/component/CapitalizationChart';

interface IMainPageProps {}

const MainPage: React.FC<IMainPageProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <BlockchainInfo />
            <Filter />
            <TablesWrapper />
            <CapitalizationChart />
            <CurencyConvertor />
        </div>
    );
};

export default MainPage;
