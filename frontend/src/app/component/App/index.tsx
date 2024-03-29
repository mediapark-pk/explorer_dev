import React from 'react';
import { Router } from 'react-router';
import Theme from 'src/app/component/Theme';
import Layout from 'src/app/component/Layout';
import Routes from 'src/app/component/Routes';
import { ModalContainer, NotificationContainer } from '@app/ui-kit';
import { SnackbarProvider } from 'notistack';
import HistoryService from 'src/app/services/HistoryService';
import { useDI } from '@app/core';
import { Socket } from '@app/socket-client';

interface IAppProps { }

const App: React.FC<IAppProps> = () => {
    const historyService = useDI(HistoryService);
    const socket = useDI(Socket);

    return (
        <Router history={historyService.history}>
            <Theme>
                <SnackbarProvider maxSnack={3}>
                    <Layout>
                        <Routes/>
                    </Layout>
                    <ModalContainer />
                    <NotificationContainer />
                </SnackbarProvider>
            </Theme>
        </Router>
    );
};

export default App;

