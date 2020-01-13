import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginLeft: '8.33%',
        marginRight: '8.33%',
        marginTop: '68px',
        display: 'flex',
    },
    appTable: {},
    table: {},
    appTableBody: {},
    formControl: {
        border: `1px solid ${theme.palette.text.secondary}`,
        color: theme.palette.text.secondary,
    }
}));
