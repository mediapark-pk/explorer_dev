import React from 'react';
import { Table } from '@material-ui/core';
import { AppTableBody } from '@app/ui-kit';
import { VMVote } from 'src/common/model/VMVote';
import { useStyles } from 'src/pages/delegate/component/TablesWrapper/component/VotesTable/style';
import VotesTableRow from 'src/pages/delegate/component/TablesWrapper/component/VotesTable/component/VotesTableRow';
import VotesTableHeader from 'src/pages/delegate/component/TablesWrapper/component/VotesTable/component/VotesTableHeader';

interface IVotesTableProps {}

const VotesTable: React.FC<IVotesTableProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <Table className={classes.table}>
            <VotesTableHeader />
            <AppTableBody className={classes.appTableBody} >
                {(item: VMVote) => (
                    <VotesTableRow key={item.id} value={item} />
                )}
            </AppTableBody>
        </Table>
    );
};

export default VotesTable;
