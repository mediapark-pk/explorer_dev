import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/DashboardPage/style';
import BlockBasicInf from 'src/pages/dashboard/component/BlockBasicInf';
import BlockSearch from 'src/pages/dashboard/component/BlockSearch';
import BlockDelegatesBlocksTransactions from 'src/pages/dashboard/component/BlockDelegatesBlocksTransactions';
import BlockCapitalization from 'src/pages/dashboard/component/BlockCapitalization';
import BlockConvertor from 'src/pages/dashboard/component/BlockConvertor';

interface IDashboardPageProps {
}

const DashboardPage: React.FC<IDashboardPageProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <BlockBasicInf />
            <BlockSearch />
            <BlockDelegatesBlocksTransactions />
            <BlockCapitalization />
            <BlockConvertor />
        </div>
    );
};

export default DashboardPage;



