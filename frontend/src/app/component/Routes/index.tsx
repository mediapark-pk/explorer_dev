import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import DelegatesPage from 'src/pages/delegates/component/MainPage';
import DelegatePage from 'src/pages/delegate/component/MainPage';
import StatisticsPage from 'src/pages/statistics/component/StatisticsPage';
import SingleStatPage from 'src/pages/statistics/component/SingleStatPage';
import AccountsPage from 'src/pages/accounts/component/AccountsPage';
import AccountPage from 'src/pages/account/component/AccountPage';
import SearchPage from 'src/pages/search/component/SearchPage';
import TransactionPage from 'src/pages/transaction/component/TransactionPage';
import TransactionsPage from 'src/pages/transactions/component/TransactionsPage';
import BlockPage from 'src/pages/block/component/BlockPage';
import BlocksPage from 'src/pages/blocks/component/BlocksPage';
import DashboardPage from 'src/pages/dashboard/component/MainPage';
import RedirectPage from 'src/app/component/RedirectPage';

const Routes = () => {
    return (
        <Switch>
            <Route path='/delegates' exact component={DelegatesPage} />
            <Route path='/delegates/:id' exact component={DelegatePage} />
            <Route path='/statistics' exact component={StatisticsPage} />
            <Route path='/statistics/single' exact component={SingleStatPage} />
            <Route path='/accounts' exact component={AccountsPage} />
            <Route path='/account/:address' exact component={AccountPage} />
            <Route path='/search' exact component={SearchPage} />
            <Route path='/transaction/:id' exact component={TransactionPage} />
            <Route path='/transactions' exact component={TransactionsPage} />
            <Route path='/block/:id' exact component={BlockPage} />
            <Route path='/blocks' exact component={BlocksPage} />
            <Route path='/' exact component={DashboardPage} />
            <Route path='/404' exact component={RedirectPage} />
            <Redirect to='/404' />
        </Switch>
    );
};

export default Routes;
