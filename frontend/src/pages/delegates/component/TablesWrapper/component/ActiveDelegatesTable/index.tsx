import React from 'react';
import { Table } from '@material-ui/core';
import { AppTableBody } from '@app/ui-kit';
import { VMDelegate } from 'src/pages/delegates/model/VMDelegate';
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
                {(item: VMDelegate, index: number) => (
                    <TableRow key={item.publicKey} value={item} />
                )}
            </AppTableBody>
        </Table>
    );
};

export default ActiveDelegatesTable;
