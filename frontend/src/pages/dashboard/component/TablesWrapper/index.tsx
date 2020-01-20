import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/TablesWrapper/style';
import { useModel } from '@app/core';
import DelegatesTable from 'src/pages/dashboard/component/DelegatesTable';
import BlocksTable from 'src/pages/dashboard/component/BlocksTable';
import TransactionsTable from 'src/pages/dashboard/component/TransactionsTable';


interface ITablesWrapperProps {}

const TablesWrapper: React.FC<ITablesWrapperProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <DelegatesTable />
            <BlocksTable />
            <TransactionsTable />
        </div>
    );
};

export default TablesWrapper;
