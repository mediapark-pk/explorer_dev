import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
    },
    tableCell: {
        padding: '4px',
    },
    tableCellRank: {
        paddingRight: '33px'
    },
    tableCellWrapper: {
        display: 'flex',
        justifyContent: 'center'
    },
    rank: {
        fontSize: '12px!important',
        textAlign: 'center',
        lineHeight: '16px',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        color: theme.palette.secondary.main,
        background: theme.palette.primary.light
    },
    name: {
        flexBasis: '100%',
        lineHeight: '20px',
        letterSpacing: '0.25px',
        color: theme.palette.primary.contrastText,
    },
    data: {
        flexBasis: '100%',
        lineHeight: '20px',
        color: theme.palette.text.primary
    },
}));
