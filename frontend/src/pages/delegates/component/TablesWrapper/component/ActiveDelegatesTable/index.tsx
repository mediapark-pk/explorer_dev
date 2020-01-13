import React from 'react';
import { Table } from '@material-ui/core';
import { AppTableBody } from '@app/ui-kit';
import { Delegate } from 'src/core/model/Delegate';
import { useStyles } from 'src/pages/delegates/component/TablesWrapper/component/ActiveDelegatesTable/style';
import TableRow from 'src/pages/delegates/component/TablesWrapper/component/ActiveDelegatesTable/component/ActiveDelegatesTableRow';
import TableHeader from 'src/pages/delegates/component/TablesWrapper/component/ActiveDelegatesTable/component/ActiveDelegatesTableHeader';

interface IActiveDelegatesTableProps {}

const ActiveDelegatesTable: React.FC<IActiveDelegatesTableProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <Table className={classes.table}>
            <TableHeader />
            <AppTableBody className={classes.appTableBody} >
                {(item: Delegate, index: number) => (
                    <TableRow key={index} value={item} />
                )}
            </AppTableBody>
        </Table>
    );
};

export default ActiveDelegatesTable;
