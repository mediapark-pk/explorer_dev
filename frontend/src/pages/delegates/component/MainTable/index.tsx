import React from 'react';
import { AppTable } from '@app/ui-kit';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import { useStyles } from 'src/pages/delegates/component/MainTable/style';
import RatingTableModel from 'src/pages/delegates/component/MainTable/model';
import ActiveDelegatesTable from 'src/pages/delegates/component/MainTable/components/ActiveDelegatesTable';
import AllDelegatesTable from 'src/pages/delegates/component/MainTable/components/AllDelegatesTable';
import MainTableFilter from 'src/pages/delegates/component/MainTable/components/MainTableFilter';

interface IRatingTableProps {}

const RatingTable: React.FC<IRatingTableProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(RatingTableModel);

    return (
        <div className={classes.root} >
            <AppTable
                className={classes.appTable}
                dataProvider={model.dataProvider}>
                <MainTableFilter 
                    tab={model.currentTab}
                    onUpdateTab={(t) => model.updateTab(t)}
                />
                {model.isActiveTab
                    ? <ActiveDelegatesTable />
                    : <AllDelegatesTable />
                }
            </AppTable>
        </div>
    );
};

export default observer(RatingTable);
