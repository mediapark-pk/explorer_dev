import React, { ReactNode } from 'react';
import { useStyles } from './styles';
import { DataProvider } from '@app/core';
import { observer } from 'mobx-react-lite';
import { AppChartTimeModel } from './model';
import classNames from 'classnames';
import { AppChartConfigFunction, AppChart, AppChartLine, AppChartMinimap, AppFromToSelector, AppTimeZoomSelector } from '@app/ui-kit';
import {
    mainChartConfigFunction as defaultExplorerMainChartConfigFunction,
    minimapConfigFunction as defaultExplorerMinimapConfigFunction
} from 'src/app/component/chart/TimeChart/config';

export interface IAppRichTimeChartProps {
    className?: string;
    dataProvider: DataProvider<any>;
    children?: ReactNode;
    mainChartConfigFunction?: AppChartConfigFunction;
    minimapConfigFunction?: AppChartConfigFunction;
}

export const AppRichTimeChart: React.FC<IAppRichTimeChartProps> = observer(({ 
        className, 
        dataProvider, 
        children, 
        mainChartConfigFunction = defaultExplorerMainChartConfigFunction, 
        minimapConfigFunction = defaultExplorerMinimapConfigFunction
}) => {
    const classes = useStyles({});
    const model = new AppChartTimeModel(dataProvider);

    return (
        <AppChart className={classNames(classes.root, className)} model={model}>
            {children}
            <div className={classes.topContainer}>
                <AppChartLine configFunction={mainChartConfigFunction} />
            </div>
            <div className={classes.bottomContainer}>
                <AppChartMinimap className={classes.chartMinimap} configFunction={minimapConfigFunction} />
                <AppFromToSelector className={classes.fromToSelector} />
                <AppTimeZoomSelector className={classes.timeZoomSelector} />
            </div>
        </AppChart>
    );
});
