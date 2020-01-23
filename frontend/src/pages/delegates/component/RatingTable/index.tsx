import React from 'react';
import { useStyles } from 'src/pages/delegates/component/RatingTable/style';
import RatingTableModel from 'src/pages/delegates/component/RatingTable/model';
import { VMDelegate } from 'src/common/model/VMDelegate';
import { AppTableBody, AppTable } from '@app/ui-kit';
import { Table } from '@material-ui/core';
import { useDI } from '@app/core';
import RatingTableRow from 'src/pages/delegates/component/RatingTable/component/RatingTableRow';
import RatingTableFilter from 'src/pages/delegates/component/RatingTable/component/RatingTableFilter';
import RatingTableHeader from 'src/pages/delegates/component/RatingTable/component/RatingTableHeader';
import { observer } from 'mobx-react-lite';

interface IRatingTableProps {}

const RatingTable: React.FC<IRatingTableProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(RatingTableModel);

    return (
        <div className={classes.root} >
            <AppTable dataProvider={model.dataProvider}>
                <RatingTableFilter />
                <Table>
                    <RatingTableHeader dataName={model.valueColumnName} />
                    <AppTableBody>
                        {(item: VMDelegate, index: number) => (
                            <RatingTableRow 
                                key={item.publicKey}
                                name={item.username}
                                rank={index + 1}
                                data={item[model.valuePropertyName].toString()}
                            />
                        )}
                    </AppTableBody>
                </Table>
            </AppTable>        
        </div>
    );
};

export default observer(RatingTable);
