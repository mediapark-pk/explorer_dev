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
import AddresesFavoritesPage from 'src/pages/address/backlog/AddresesFavoritesPage';
import AddresesProfilePage from 'src/pages/address/backlog/AddresesProfilePage';
import AddresesSettingsPage from 'src/pages/address/backlog/AddresesSettingsPage';
import SearchPage from 'src/pages/search/component/SearchPage';
import SingleTransactionPage from 'src/pages/transaction/component/SingleTransactionPage';
import TransactionsPage from 'src/pages/transactions/component/TransactionsPage';
import SingleBlockPage from 'src/pages/block/component/SingleBlockPage';
import BlocksPage from 'src/pages/blocks/component/BlocksPage';
import DashboardPage from 'src/pages/dashboard/component/DashboardPage';


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
            <Route path='/addresses/favorites' exact component={AddresesFavoritesPage} />
            <Route path='/addresses/privatnotes' exact component={AddresesProfilePage} />
            <Route path='/addresses/settings' exact component={AddresesSettingsPage} />
            <Route path='/search' exact component={SearchPage} />
            <Route path='/transaction/single' exact component={SingleTransactionPage} />
            <Route path='/transactions' exact component={TransactionsPage} />
            <Route path='/block/single' exact component={SingleBlockPage} />
            <Route path='/blocks' exact component={BlocksPage} />
            <Route path='/dashboard' exact component={DashboardPage} />
            <Redirect from='/' to='/delegates' />
        </Switch>
    );
};

export default Routes;
