import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    appTable: {
        flexBasis: '69.95%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '22%',
        marginRight: '8%',
        marginTop: '0px',
        marginBottom: '0px',
        minHeight: '176px',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    table: {
        flexBasis: '100%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '0px',
        minHeight: '176px',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    appTableBody: {
        minHeight: '176px',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    tableRow: {
        minHeight: '44px',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    root1: {
        height: '44px'
    },
    root2: {
        padding: '0px'
    },
    typography: {
        flexBasis: '100%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '0px',
        minWidth: '78px',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '18px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '43px',
        letterSpacing: '0.5px'
    },
    typography1: {
        flexBasis: '100%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '0px',
        minWidth: '78px',
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '18px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '43px',
        letterSpacing: '0.5px'
    },
    root: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '0px',
        minHeight: '394px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    div: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '56px',
        marginBottom: '19px',
        minHeight: '68px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    div1: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '19px',
        marginBottom: '56px',
        minHeight: '176px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    div2: {
        minHeight: '44px',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center'
    }
}));
