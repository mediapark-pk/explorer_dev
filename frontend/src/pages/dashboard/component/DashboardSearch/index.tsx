import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/DashboardSearch/style';
import DashboardSearchModel, { FilterProps } from 'src/pages/dashboard/component/DashboardSearch/model';
import { Button, TextField, Select, IconButton, MenuItem } from '@material-ui/core';
import { 
    Clear as ClearIcon,
    Search as SearchIcon,
 } from '@material-ui/icons';
import { useDI } from '@app/core';
import { isNumber } from 'util';
import { observer } from 'mobx-react-lite';

interface IDashboardSearchProps {}

const DashboardSearch: React.FC<IDashboardSearchProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(DashboardSearchModel);

    return (
        <div className={classes.root} >
            <Select
                value={model.filter}
                onChange={model.onFilterUpdate}
                displayEmpty
                className={classes.dropdown}
                SelectDisplayProps={{
                    className: classes.select
                }}
            >
                <MenuItem value={FilterProps.All}>All filters</MenuItem>
                <MenuItem value={FilterProps.Addresses}>Addresses</MenuItem>
                <MenuItem value={FilterProps.Delegates}>Delegates</MenuItem>
                <MenuItem value={FilterProps.Blocks}>Blocks</MenuItem>
                <MenuItem value={FilterProps.Transactions}>Transactions</MenuItem>
            </Select>
            <TextField
                className={classes.searchField}
                placeholder='Search by Block, transaction or account'
                value={model.searchText}
                onChange={model.onSearchTextUpdate}
                InputProps={{
                    className: classes.searchFieldInput,
                    endAdornment: model.searchText &&
                        (
                        <IconButton onClick={model.clearSearchText}>
                            <ClearIcon />
                        </IconButton>
                        )
                }}
            />
            <Button 
                className={classes.button}
                variant='contained'
                color='primary'
                startIcon={<SearchIcon className={classes.buttonIcon} />}
            >
                <span className={classes.buttonLabel}>          
                    Search
                </span>
            </Button>
        </div>
    );
};

export default observer(DashboardSearch);
