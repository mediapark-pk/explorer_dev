import React from 'react';
import { useStyles } from 'src/pages/transactions/component/TransactionsPage/style';
import PageTitle from 'src/pages/transactions/component/PageTitle';
import TransactionsBlockchainInfo from 'src/pages/transactions/component/TransactionsBlockchainInfo';
import TransactionsTable from 'src/pages/transactions/component/TransactionsTable';
import { observer } from 'mobx-react-lite';

interface ITransactionsPageProps {
}

const TransactionsPage: React.FC<ITransactionsPageProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <PageTitle />
            <TransactionsBlockchainInfo />
            <TransactionsTable />
        </div>
    );
};

export default observer(TransactionsPage);
