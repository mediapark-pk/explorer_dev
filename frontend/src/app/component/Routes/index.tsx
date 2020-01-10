import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import DelegatesPage from 'src/pages/delegates/component/MainPage';
import DelegatePage from 'src/pages/delegate/component/MainPage';
import StatisticsPage from 'src/pages/statistics/component/StatisticsPage';
import SingleStatPage from 'src/pages/statistics/component/SingleStatPage';
import AddressesPage from 'src/pages/addresses/component/AddressesPage';
import AddressPage from 'src/pages/address/component/AddressPage';
import LoginPage from 'src/pages/Login/component/LoginPage';
import RegistrationPage from 'src/pages/Registration/component/RegistrationPage';
import ForgetPage from 'src/pages/Forget/component/ForgetPage';
import SearchPage from 'src/pages/search/component/SearchPage';
import TransactionPage from 'src/pages/transaction/component/TransactionPage';
import TransactionsPage from 'src/pages/transactions/component/TransactionsPage';
import BlockPage from 'src/pages/block/component/BlockPage';
import BlocksPage from 'src/pages/blocks/component/BlocksPage';
import DashboardPage from 'src/pages/dashboard/component/DashboardPage';
import RedirectPage from 'src/app/component/RedirectPage';

const Routes = () => {
    return (
        <Switch>
            <Route path='/delegates' exact component={DelegatesPage} />
            <Route path='/delegates/:id' exact component={DelegatePage} />
            <Route path='/statistics' exact component={StatisticsPage} />
            <Route path='/statistics/single' exact component={SingleStatPage} />
            <Route path='/addresses' exact component={AddressesPage} />
            <Route path='/account/:address' exact component={AddressPage} />
            <Route path='/Login' exact component={LoginPage} />
            <Route path='/Registration' exact component={RegistrationPage} />
            <Route path='/Forget' exact component={ForgetPage} />
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
