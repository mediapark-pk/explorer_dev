import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        alignSelf: 'stretch',
        flexBasis: '7.92%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '8.33%',
        marginRight: '0.31%',
        minWidth: '152px',
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '34px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '39.84375px',
        letterSpacing: '0.25px'
    },
    typography1: {
        alignSelf: 'flex-end',
        marginBottom: '1px',
        flexBasis: '12.6%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '0.31%',
        marginRight: '28.52%',
        minWidth: '242px',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '14px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '20px',
        letterSpacing: '0.25px'
    },
    button: {
        flexBasis: '5.16%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '28.52%',
        marginRight: '8.33%',
        minHeight: '24px',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    root1: {
        height: '24px',
        minWidth: '99px'
    },
    typography2: {
        minWidth: '64px',
        color: 'rgba(61, 144, 227, 1)',
        fontSize: '20px!important',
        fontWeight: 500,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '23.4375px',
        letterSpacing: '0.15000000596046448px'
    },
    root: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '59px',
        marginBottom: '40px',
        minHeight: '40px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    baselineExitToApp24px: {
        minHeight: '24px'
    }
}));
