import React from 'react';
import { useStyles } from 'src/pages/transactions/component/TransactionsPage/style';
import PageTitle12 from 'src/pages/transactions/component/PageTitle12';
import BlockAllInfo4 from 'src/pages/transactions/component/BlockAllInfo4';
import BlockAllBlocks3 from 'src/pages/transactions/component/BlockAllBlocks3';
import { useDI } from '@app/core';
import TransactionsPageModel from 'src/pages/transactions/component/TransactionsPage/model';

interface ITransactionsPageProps {
}

const TransactionsPage: React.FC<ITransactionsPageProps> = ({ }) => {
    const classes = useStyles({});
    const transactionsPageModel = useDI(TransactionsPageModel);

    return (
        <div className={classes.root} >
            <PageTitle12 />
            <BlockAllInfo4 />
            <BlockAllBlocks3 dataProvider={transactionsPageModel.dataProvider} />
        </div>
    );
};

export default TransactionsPage;



