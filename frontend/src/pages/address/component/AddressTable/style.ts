import { makeStyles, Theme } from '@material-ui/core/styles';

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
        overflow: 'hidden'
    },
    tabs: {
        minHeight: '30px',
    },
    tab: {
        marginRight: theme.spacing(4),
        fontSize: '20px',
        textTransform: 'none',
        color: theme.palette.text.secondary,
        transition: 'color .1s linear',
        '&.Mui-selected': {
            color: theme.palette.text.primary
        },
        '&:hover': {
            color: theme.palette.text.hint
        }
    },
    tabIndicator: {
        background: theme.palette.text.primary
    },
    tableHeadTitle: {
        color: theme.palette.text.secondary,
        fontWeight: 400,
        fontFamily: 'Roboto',

    },
    table: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '9px',
        marginBottom: '0px',
    },
    tableHead: {
        minHeight: '44px',
        background: theme.palette.secondary.main,
    },
    tableRow: {
        minHeight: '44px',
    },
    appTableBody: { },
    link: {
        color: theme.palette.primary.contrastText,
    },
}));
