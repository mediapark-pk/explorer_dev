import React from 'react';
import { AppTable, AppTabPanel } from '@app/ui-kit';
import { useModel } from '@app/core';
import { observer } from 'mobx-react-lite';
import { useStyles } from 'src/pages/delegate/component/TablesWrapper/style';
import TablesWrapperModel, { Tab } from 'src/pages/delegate/component/TablesWrapper/model';
import TabsNavigation from 'src/pages/delegate/component/TablesWrapper/component/TabsNavigation';
import ForgedBlocksTable from 'src/pages/delegate/component/TablesWrapper/component/ForgedBlocksTable';
import VotesTable from 'src/pages/delegate/component/TablesWrapper/component/VotesTable';

interface ITablesWrapperProps {}

const TablesWrapper: React.FC<ITablesWrapperProps> = ({ }) => {
    const classes = useStyles({});
    const model = useModel(TablesWrapperModel);

    return (
        <div className={classes.root} >
            <AppTable
                className={classes.appTable}
                dataProvider={model.dataProvider}
            >
                <TabsNavigation />
                <AppTabPanel value={model.currentTab} index={Tab.Forged} >
                    <ForgedBlocksTable />
                </AppTabPanel>
                <AppTabPanel value={model.currentTab} index={Tab.Votes} >
                    <VotesTable />
                </AppTabPanel>
            </AppTable>
        </div>
    );
};

export default observer(TablesWrapper);
