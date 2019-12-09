import React from 'react';
import { useStyles } from 'src/pages/transactions/component/TransactionsPage/style';
import PageTitle12 from 'src/pages/transactions/component/PageTitle12';
import BlockAllInfo4 from 'src/pages/transactions/component/BlockAllInfo4';
import BlockAllBlocks3 from 'src/pages/transactions/component/BlockAllBlocks3';

interface ITransactionsPageProps {
}

const TransactionsPage: React.FC<ITransactionsPageProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <PageTitle12 />
            <BlockAllInfo4 />
            <BlockAllBlocks3 />
        </div>
    );
};

export default TransactionsPage;



