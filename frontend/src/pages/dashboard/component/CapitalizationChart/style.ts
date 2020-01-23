import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        background: theme.palette.secondary.main,
        padding: '65px 160px',
    },
    titleWrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '6px',
        fontWeight: 500,
        fontSize: '20px',
        letterSpacing: '0.15px',
        color: theme.palette.text.primary,
    },
    capValue: {
        marginLeft: '37px',
        fontSize: '20px',
        fontWeight: 500,
        letterSpacing: '0.15px',
        color: theme.palette.text.secondary,
    },
    under: {
        position: 'relative',
        top: '3px',
        marginLeft: '6px',
        fontSize: '10px',
        fontWeight: 300,
        letterSpacing: '0.15px',
        color: theme.palette.text.secondary,
    }
}));
