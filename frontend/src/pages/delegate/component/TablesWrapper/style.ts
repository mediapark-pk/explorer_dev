import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        maxWidth: '784px',
        marginLeft: '8.33%',
        marginRight: '8.33%',
        flexGrow: 1,
    },
    appTable: {
        width: '100%',
    },
}));
