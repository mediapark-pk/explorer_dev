import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStyles } from './styles';
import { DataProviderContext } from '@app/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

interface IAppTableHeadProps {
    className?: string;
    label: string;
    field: string;
}

export const AppTableSearch: React.FC<IAppTableHeadProps> = observer(({ className, label, field }) => {
    const classes = useStyles({});
    const dataProvider = React.useContext(DataProviderContext);
    const [ isSearch, setSearch ] = React.useState(false);
    const onSearch = React.useCallback(event => setSearch(!isSearch), [isSearch]);

    const renderBody = () => {
        if (isSearch) {
            return (
                <TextField placeholder={label} />
            );
        }

        return (
            <Typography>
                {label}
            </Typography>
        );
    }

    return (
        <div className={classes.root}>
            {renderBody()}
            <IconButton onClick={onSearch}>
                <SearchIcon />
            </IconButton>
        </div>
    );
});
