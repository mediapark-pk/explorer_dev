import React from 'react';
import { Table } from '@material-ui/core';
import { AppTableBody } from '@app/ui-kit';
import { VMBlock } from 'src/pages/delegate/model/VMBlock';
import { useStyles } from 'src/pages/delegate/component/TablesWrapper/component/ForgedBlocksTable/style';
import ForgedBlocksTableRow from 'src/pages/delegate/component/TablesWrapper/component/ForgedBlocksTable/component/ForgedBlocksTableRow';
import ForgedBlocksTableHeader from 'src/pages/delegate/component/TablesWrapper/component/ForgedBlocksTable/component/ForgedBlocksTableHeader';

interface IForgedBlocksTableProps {}

const ForgedBlocksTable: React.FC<IForgedBlocksTableProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <Table className={classes.table}>
            <ForgedBlocksTableHeader />
            <AppTableBody className={classes.appTableBody} >
                {(item: VMBlock) => (
                    <ForgedBlocksTableRow key={item.id} value={item} />
                )}
            </AppTableBody>
        </Table>
    );
};

export default ForgedBlocksTable;
