import React from 'react';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import { useStyles } from 'src/pages/delegates/component/MainTable/components/MainTableFilter/style';
import MainTableModel from 'src/pages/delegates/component/MainTable/model';
import {
    Tabs,
    Tab
 } from '@material-ui/core';
 import { 
    AppTableTitle,
    AppTablePaginator,
 } from '@app/ui-kit';

interface IMainTableFilterProps {
    tab: number;
    onUpdateTab: (data: number) => void;
}

const MainTableFilter: React.FC<IMainTableFilterProps> = ({ tab, onUpdateTab }) => {
    const classes = useStyles({});
    const model = useDI(MainTableModel);

    const [value, setValue] = React.useState<number>(tab);

    return (
        <AppTableTitle className={classes.root}>
             <Tabs
                className={classes.tabs}
                value={value}
                onChange={(event, newValue) => { 
                    setValue(newValue);
                    onUpdateTab(newValue);
                }}
                TabIndicatorProps={{
                    className: classes.tabIndicator
                }}
            >
                <Tab
                    className={classes.tab}
                    label={`Active round (${model.dataProvider.repository.totalCount})`}
                />
                <Tab
                    className={classes.tab}
                    label={'All delegates'}
                />
            </Tabs>
            <AppTablePaginator />
        </AppTableTitle>
    );
};

export default observer(MainTableFilter);
