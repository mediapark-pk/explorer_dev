import React from 'react';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import { useStyles } from 'src/pages/delegates/component/TablesWrapper/component/TabsNavigation/style';
import TablesWrapperModel, { DelegatesFetchMode } from 'src/pages/delegates/component/TablesWrapper/model';
import {
    Tabs,
    Tab
 } from '@material-ui/core';
 import { 
    AppTableTitle,
    AppTablePaginator,
 } from '@app/ui-kit';

interface IMainTableFilterProps {}

const MainTableFilter: React.FC<IMainTableFilterProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(TablesWrapperModel);

    return (
        <AppTableTitle className={classes.root}>
             <Tabs
                className={classes.tabs}
                value={model.fetchMode}
                onChange={model.onTabUpdate}
                TabIndicatorProps={{
                    className: classes.tabIndicator
                }}
            >
                <Tab
                    className={classes.tab}
                    label={`Active round (${model.dataProvider.repository.totalCount})`}
                    value={DelegatesFetchMode.Active}
                />
                <Tab
                    className={classes.tab}
                    label={'All delegates'}
                    value={DelegatesFetchMode.All}
                />
            </Tabs>
            <AppTablePaginator />
        </AppTableTitle>
    );
};

export default observer(MainTableFilter);
