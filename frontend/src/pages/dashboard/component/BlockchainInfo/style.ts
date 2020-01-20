import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: '20px 160px',
        backgroundColor: theme.palette.secondary.main,
    },
    label: {
        height: '16px',
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '0.4px',
        color: theme.palette.text.secondary,
    },
    value: {
        marginLeft: '4px',
        height: '16px',
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '0.4px',
    },
    wrapper: {
        width: 'auto',
    }
}));
