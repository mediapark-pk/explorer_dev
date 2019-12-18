import React from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useStyles } from './styles';
import { DataProviderContext, DataProvider } from '@app/core';
import { TablePagination } from '@material-ui/core';

interface IAppTablePaginatorProps {
    className?: string;
}

export const AppTablePaginator: React.FC<IAppTablePaginatorProps> = observer(({ className }) => {
    const classes = useStyles({});
    const dataProvider = React.useContext<DataProvider>(DataProviderContext);
    const paginator = dataProvider.paginator

    return (
        <TablePagination
            className={classNames(classes.root)}
            rowsPerPageOptions={paginator.rowsPerPageOptions}
            component='div'
            count={paginator.count}
            rowsPerPage={paginator.rowsPerPage}
            page={paginator.page}
            backIconButtonProps={{
                'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
                'aria-label': 'Next Page',
            }}
            onChangePage={(event, page) => paginator.onChangePage(page)}
            onChangeRowsPerPage={event => paginator.onChangeRowsPerPage(Number(event.target.value))}
        />
    );
});
