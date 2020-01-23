import React from 'react';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import { useStyles } from 'src/pages/delegate/component/TablesWrapper/component/TabsNavigation/style';
import TablesWrapperModel from 'src/pages/delegate/component/TablesWrapper/model';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

 import { 
    AppTableTitle,
    AppTablePaginator,
 } from '@app/ui-kit';

interface ITabsNavigationProps {}

const TabsNavigation: React.FC<ITabsNavigationProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(TablesWrapperModel);

    return (
        <AppTableTitle className={classes.root}>
             <Tabs
                className={classes.tabs}
                value={model.currentTab}
                onChange={model.onTabUpdate}
                TabIndicatorProps={{
                    className: classes.tabIndicator
                }}
            >
                <Tab
                    className={classes.tab}
                    label={`Forged blocks (${model.blocksDataProvider.repository.totalCount})`}
                />
                <Tab
                    className={classes.tab}
                    label={'Votes'}
                />
            </Tabs>
            <AppTablePaginator />
        </AppTableTitle>
    );
};

export default observer(TabsNavigation);
