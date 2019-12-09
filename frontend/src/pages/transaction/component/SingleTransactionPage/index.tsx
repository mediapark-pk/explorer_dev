import React from 'react';
import { useStyles } from 'src/pages/transaction/component/SingleTransactionPage/style';
import BackButton4 from 'src/pages/transaction/component/BackButton4';
import PageTitle11 from 'src/pages/transaction/component/PageTitle11';
import TransactionInfo from 'src/pages/transaction/component/TransactionInfo';
import BlockTransactions from 'src/pages/transaction/component/BlockTransactions';
import CommentAndPrivateNote from 'src/pages/transaction/component/CommentAndPrivateNote';

interface ISingleTransactionPageProps {
}

const SingleTransactionPage: React.FC<ISingleTransactionPageProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <BackButton4 />
            </div>
            <div className={classes.div1} >
                <PageTitle11 />
            </div>
            <div className={classes.div2} >
                <TransactionInfo />
            </div>
            <div className={classes.div3} >
                <BlockTransactions />
                <CommentAndPrivateNote />
            </div>
        </div>
    );
};

export default SingleTransactionPage;



