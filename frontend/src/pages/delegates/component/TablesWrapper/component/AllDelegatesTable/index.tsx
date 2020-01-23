import React from 'react';
import Table from '@material-ui/core/Table';
import { AppTableBody } from '@app/ui-kit';
import { VMDelegate } from 'src/common/model/VMDelegate';
import { useStyles } from 'src/pages/delegates/component/TablesWrapper/component/AllDelegatesTable/style';
import AllDelegatesTableRow from 'src/pages/delegates/component/TablesWrapper/component/AllDelegatesTable/component/AllDelegatesTableRow';
import AllDelegatesTableHeader from 'src/pages/delegates/component/TablesWrapper/component/AllDelegatesTable/component/AllDelegatesTableHeader';

interface IAllDelegatesTableProps {}

const AllDelegatesTable: React.FC<IAllDelegatesTableProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <Table className={classes.table}>
            <AllDelegatesTableHeader />
            <AppTableBody className={classes.appTableBody} >
                {(item: VMDelegate, index: number) => (
                    <AllDelegatesTableRow key={item.publicKey} value={item} />
                )}
            </AppTableBody>
        </Table>
    );
};

export default AllDelegatesTable;
