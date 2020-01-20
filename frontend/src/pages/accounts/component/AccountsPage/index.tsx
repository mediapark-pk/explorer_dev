import React from 'react';
import { useStyles } from 'src/pages/accounts/component/AccountsPage/style';
import PageTitle from 'src/pages/accounts/component/PageTitle';
import AccountsInfo from 'src/pages/accounts/component/AccountsInfo';
import AccountsTable from 'src/pages/accounts/component/AccountsTable';
import AccountsPageModel from 'src/pages/accounts/component/AccountsPage/model';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';

interface IAccountsPageProps {
}

const AccountsPage: React.FC<IAccountsPageProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(AccountsPageModel);

    return (
        <div className={classes.root} >
            <PageTitle/>
            <AccountsInfo/>
            <AccountsTable dataProvider={model.dataProvider}/>
        </div>
    );
};

export default observer(AccountsPage);
