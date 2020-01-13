import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        background: theme.palette.secondary.main,
    },
    tableCell: {
        padding: '14px 8px',
        color: theme.palette.text.secondary,
        fontSize: '14px',
        fontWeight: 'normal',
    },
    tableCellCentered: {
        padding: '14px 8px',
        color: theme.palette.text.secondary,
        fontSize: '14px',
        fontWeight: 'normal',
        textAlign: 'center',
    }
}));
