import React from 'react';
import { Router } from 'react-router';
import Theme from 'src/app/component/Theme';
import Layout from 'src/app/component/Layout';
import Routes from 'src/app/component/Routes';
import ModalContainer from 'ui-kit/modal/ModalContainer';
import HistoryService from 'src/app/services/HistoryService';
import { useDI } from 'src/core/di';

interface IAppProps {
}

const App: React.FC<IAppProps> = () => {
    const historyService = useDI(HistoryService);

    return (
        <Router history={historyService.history}>
            <Theme>
                <Layout>
                    <Routes/>
                </Layout>
                <ModalContainer />
            </Theme>
        </Router>
    );
};

export default App;

