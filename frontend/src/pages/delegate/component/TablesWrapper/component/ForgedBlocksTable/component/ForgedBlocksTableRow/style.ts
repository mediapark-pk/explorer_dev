import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        '&:nth-child(2n - 1)': {
            background: theme.palette.secondary.dark,            
        },
    },
    tableCell: {
        padding: '14px',
        color: theme.palette.text.hint,
        maxWidth: '180px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    centered: {
        textAlign: 'center',
    },
    link: {
        color: theme.palette.primary.contrastText,
    },
}));
