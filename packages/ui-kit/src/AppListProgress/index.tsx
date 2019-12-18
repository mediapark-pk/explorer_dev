import React from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useStyles } from './styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { DataProviderContext, DataProvider } from '@app/core';

interface IAppListProgressProps {
    className?: string;
}

export const AppListProgress: React.FC<IAppListProgressProps> = observer(({ className }) => {
    const classes = useStyles({});
    const dataProvider = React.useContext<DataProvider>(DataProviderContext);

    return (
        <div className={classNames(classes.root, className)}>
            {dataProvider.isLoading ? <LinearProgress /> : null}
        </div>
    );
});
