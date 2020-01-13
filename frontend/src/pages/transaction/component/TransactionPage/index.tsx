import React from 'react';
import { useStyles } from 'src/pages/transaction/component/TransactionPage/style';
import BackButton from 'src/app/component/BackButton';
import TransactionInfo from 'src/pages/transaction/component/TransactionInfo';
import PageTitle from 'src/pages/transaction/component/PageTitle';
import TransactionPageModel from 'src/pages/transaction/component/TransactionPage/model';
import { useModel } from '@app/core/src';
import BlockTransactions from 'src/pages/transaction/component/BlockTransactions';
import { useParams } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';
import { observer } from 'mobx-react-lite';

interface ITransactionPageProps {
}

const TransactionPage: React.FC<ITransactionPageProps> = ({}) => {
    const classes = useStyles({});
    const { id } = useParams<{ id?: string }>();
    const model = useModel(TransactionPageModel);

    React.useEffect(() => {
        if (id) {
            model.loadTransaction(id);
        }
    }, [id]);

    if (model.isLoading) {
        return (
            <div className={classes.loading}>
                <CircularProgress size={72}/>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            <BackButton/>
            <PageTitle headline='Transaction'>{model.transaction.id}</PageTitle>
            <TransactionInfo transaction={model.transaction}/>
            <BlockTransactions/>
        </div>
    );
};

export default observer(TransactionPage);
