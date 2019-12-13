import React from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useStyles } from './styles';
import { DataProviderContext, DataProvider } from '@app/core';

interface IAppListBodyProps {
    className?: string;
    children(item: any, index: number);
}

const AppListBody: React.FC<IAppListBodyProps> = ({ className, children }) => {
    const classes = useStyles({});
    const dataProvider = React.useContext<DataProvider>(DataProviderContext);

    return (
        <div className={className}>
            {dataProvider.repository.data.map((item, index) => children(item, index))}
        </div>
    );
};

export default observer(AppListBody);
