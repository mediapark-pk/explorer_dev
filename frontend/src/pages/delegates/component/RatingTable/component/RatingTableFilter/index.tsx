import React from 'react';
import { useStyles } from 'src/pages/delegates/component/RatingTable/component/RatingTableFilter/style';
import RatingTableModel from 'src/pages/delegates/component/RatingTable/model';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
 import { 
    AppTableTitle,
 } from '@app/ui-kit';

interface IRatingTableFilterProps {}

const RatingTableFilter: React.FC<IRatingTableFilterProps> = ({}) => {
    const classes = useStyles({});
    const model = useDI(RatingTableModel);

    React.useEffect(() => model.loadData(), [model.params]);

    return (
        <AppTableTitle className={classes.root}>
            <TextField
                className={classes.filterField}
                select={true}
                variant='outlined'
                value={model.params.filter}
                onChange={(e) => model.setFilter(e.target.value)}
            >
                <MenuItem value='today'>Today</MenuItem>
                <MenuItem value='week'>Last week</MenuItem>
                <MenuItem value='month'>Last month</MenuItem>
            </TextField>
            <TextField
                className={classes.filterField}
                select={true}
                variant='outlined'
                value={model.params.sort}
                onChange={(e) => model.setSort(e.target.value)}
            >
                <MenuItem value='votes'>By votes</MenuItem>
                <MenuItem value='forged'>By forged</MenuItem>
                <MenuItem value='missed'>By missed</MenuItem>
                <MenuItem value='uptime'>By uptime</MenuItem>
            </TextField>
        </AppTableTitle>
    );
};

export default observer(RatingTableFilter);
