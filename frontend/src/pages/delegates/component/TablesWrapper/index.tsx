import React from 'react';
import { AppTable, AppTabPanel } from '@app/ui-kit';
import { useModel } from '@app/core';
import { observer } from 'mobx-react-lite';
import { useStyles } from 'src/pages/delegates/component/TablesWrapper/style';
import TablesWrapperModel, { DelegatesFetchMode } from 'src/pages/delegates/component/TablesWrapper/model';
import ActiveDelegatesTable from 'src/pages/delegates/component/TablesWrapper/component/ActiveDelegatesTable';
import AllDelegatesTable from 'src/pages/delegates/component/TablesWrapper/component/AllDelegatesTable';
import TabsNavigation from 'src/pages/delegates/component/TablesWrapper/component/TabsNavigation';

interface ITablesWrapperProps {}

const TablesWrapper: React.FC<ITablesWrapperProps> = ({ }) => {
    const classes = useStyles({});
    const model = useModel(TablesWrapperModel);

    return (
        <div className={classes.root} >
            <AppTable
                className={classes.appTable}
                dataProvider={model.dataProvider}>
                <TabsNavigation />
                <AppTabPanel value={model.fetchMode} index={DelegatesFetchMode.Active}>
                    <ActiveDelegatesTable />
                </AppTabPanel>
                <AppTabPanel value={model.fetchMode} index={DelegatesFetchMode.All}>
                    <AllDelegatesTable />
                </AppTabPanel>
            </AppTable>
        </div>
    );
};

export default observer(TablesWrapper);
