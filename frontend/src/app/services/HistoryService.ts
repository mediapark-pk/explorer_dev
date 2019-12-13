import { singleton } from 'src/container';
import { RouterStore, syncHistoryWithStore, SynchronizedHistory } from 'mobx-react-router';
import { createBrowserHistory } from 'history';

@singleton
class HistoryService {

    public readonly history: SynchronizedHistory;

    public readonly routerStore: RouterStore;

    constructor(routerStore: RouterStore) {
        this.routerStore = routerStore;
        this.history = this.createHistory();
    }

    createHistory(): SynchronizedHistory {
        const browserHistory = createBrowserHistory();
        return syncHistoryWithStore(browserHistory, this.routerStore);
    }
}

export default HistoryService;
