import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    button: {
        marginLeft: '0.53%',
        marginRight: '73.4%',
        marginTop: '12px',
        marginBottom: '17.5px',
        minHeight: '24px',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    root1: {
        height: '24px',
        minWidth: '98px'
    },
    typography: {
        minWidth: '65px',
        color: 'rgba(61, 144, 227, 1)',
        fontSize: '14px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '20px',
        letterSpacing: '0.25px'
    },
    add: {
        minHeight: '24px',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    typography1: {
        marginLeft: '1.33%',
        marginRight: '26.6%',
        marginTop: '17.5px',
        marginBottom: '0px',
        minWidth: '271px',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '14px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '20px',
        letterSpacing: '0.25px'
    },
    root: {
        alignSelf: 'flex-start',
        marginTop: '0px',
        flexBasis: '23.5%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '1%',
        marginRight: '0%',
        minHeight: '151px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));
