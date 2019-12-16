import React from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useStyles } from './styles';
import { DataProviderContext, DataProvider } from '@app/core';
import Button from '@material-ui/core/Button';

interface IAppTablePaginatorProps {
    className?: string;
}

const AppTablePaginatorComponent: React.FC<IAppTablePaginatorProps> = ({ className }) => {
    const classes = useStyles({});
    const dataProvider = React.useContext<DataProvider>(DataProviderContext);

    return (
        <div className={classNames(classes.root, className)}>
            <Button onClick={() => dataProvider.paginator.previous()}>{'<'}</Button>
            <span className={classes.text}>
                    {`${dataProvider.paginator.page + 1} of ${dataProvider.paginator.lastPage || 1}`}
                </span>
            <Button onClick={() => dataProvider.paginator.next()}>{'>'}</Button>
        </div>
    );
};

export const AppTablePaginator = observer(AppTablePaginatorComponent);
