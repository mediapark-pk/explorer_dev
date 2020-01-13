import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        padding: '0 8.33%',
        background: theme.palette.secondary.main,
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}));
