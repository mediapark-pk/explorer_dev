import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStyles } from 'src/pages/blocks/component/Chart/style';
import { AppChartTime } from '@app/ui-kit';
import { DataProvider } from '@app/core';

interface IChartProps {
    dataProvider: DataProvider<any>;
}

export const Chart: React.FC<IChartProps> = observer(({ dataProvider }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            {/*<AppChartTime dataProvider={dataProvider} />*/}
        </div>
    );
});


