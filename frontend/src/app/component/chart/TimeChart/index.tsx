import React, { ReactNode, useEffect, useRef } from 'react';
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
import Skeleton from 'src/common/component/Skeleton';

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
    const model = useRef(new AppChartTimeModel(dataProvider));

    if (model.current.isLoading) {
        return (
            <div className={classNames(classes.root, className)}>
                <div className={classes.topContainer}>
                    <Skeleton width='100%' height='100%' />
                </div>
                <div className={classes.bottomContainer}>
                    <Skeleton width='60%' height='100%' />
                    <Skeleton width='10%' height='100%' />
                    <Skeleton width='20%' height='100%' />
                </div>
            </div>
        );
    }

    return (
        <AppChart className={classNames(classes.root, className)} model={model.current}>
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
