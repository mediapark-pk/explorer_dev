import { makeStyles, Theme } from '@material-ui/core/styles';
import { COLORS } from 'src/app/component/Theme/theme';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '6px',
        marginBottom: '17px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    appTable: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: '0px',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '8%',
        marginRight: '8%',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    appTableTitle: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '9px',
        minHeight: '30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        overflow: 'hidden'
    },
    tabs: {
        minHeight: '30px',
    },
    tab: {
        marginRight: theme.spacing(4),
        fontSize: '20px',
        textTransform: 'none',
        color: theme.palette.primary.main,
        transition: 'color .1s linear',
        '&.Mui-selected': {
            color: theme.palette.primary.contrastText
        },
        '&:hover': {
            color: theme.palette.primary.light
        }
    },
    tabIndicator: {
        background: theme.palette.primary.contrastText
    },
    tableHeadTitle: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontWeight: 400,
        fontFamily: 'Roboto',

    },
    table: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '9px',
        marginBottom: '0px',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    tableHead: {
        minHeight: '44px',
        background: COLORS.MIRAGE_L,
    },
    tableRow: {
        minHeight: '44px',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    appTableBody: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    link: {
        color: COLORS.PICTON_BLUE,
    },
}));
