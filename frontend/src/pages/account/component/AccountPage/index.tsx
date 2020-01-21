import React from 'react';
import { useStyles } from 'src/pages/account/component/AccountPage/style';
import PageTitle from 'src/pages/account/component/PageTitle';
import AccountStatistic from 'src/pages/account/component/AccountStatistic';
import { useDI } from '@app/core';
import AccountPageModel from 'src/pages/account/component/AccountPage/model';
import { observer } from 'mobx-react-lite';
import AccountTable from 'src/pages/account/component/AccountTable';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import { useParams } from 'react-router';
import BackButton from 'src/app/component/BackButton';

interface IAccountPageProps {

}

const AccountPage: React.FC<IAccountPageProps> = ({}) => {
    const classes = useStyles({});
    const { address } = useParams<{ address?: string }>();
    const model = useDI(AccountPageModel);

    React.useEffect(() => {
        if (address) {
            model.loadAccount(address);
        }
    }, [address]);

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
            <PageTitle headline='Address'>{model.account.address}</PageTitle>
            <AccountStatistic account={model.account}/>
            <AccountTable/>
        </div>
    );
};

export default observer(AccountPage);
