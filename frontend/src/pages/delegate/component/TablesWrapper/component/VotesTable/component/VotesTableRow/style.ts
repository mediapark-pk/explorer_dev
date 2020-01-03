import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    tableCell: {
        color: theme.palette.text.primary,
        background: theme.palette.secondary.dark,
        padding: '14px',
    },
    link: {
        color: theme.palette.primary.contrastText,
    },
    centered: {
        textAlign: 'center',
    }
}));
