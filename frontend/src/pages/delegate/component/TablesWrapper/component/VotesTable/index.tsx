import React from 'react';
import { Table } from '@material-ui/core';
import { AppTableBody } from '@app/ui-kit';
import { Vote } from 'src/core/model/Vote';
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
                {(item: Vote, index: number) => (
                    <VotesTableRow key={index} value={item} />
                )}
            </AppTableBody>
        </Table>
    );
};

export default VotesTable;
