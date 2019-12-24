import { makeStyles, Theme } from '@material-ui/core/styles';
import { COLORS } from 'src/app/component/Theme/theme';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
    },
    tableCell: {
        padding: '4px 4px 8px 0',
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
        color: COLORS.MIRAGE_L,
        background: theme.palette.secondary.light
    },
    name: {
        flexBasis: '100%',
        lineHeight: '20px',
        letterSpacing: '0.25px',
        color: theme.palette.secondary.contrastText,
    },
    data: {
        flexBasis: '100%',
        lineHeight: '20px',
        color: theme.palette.primary.contrastText
    },
}));
