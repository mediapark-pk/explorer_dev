import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        marginLeft: '0%',
        marginRight: '85.48%',
        marginTop: '0px',
        marginBottom: '8px',
        minWidth: '36px',
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '18px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '28px',
        letterSpacing: '0.5px'
    },
    textField: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '8px',
        marginBottom: '0px',
        minHeight: '23px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    typography1: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '0px',
        minWidth: '248px',
        color: 'rgba(61, 144, 227, 1)',
        fontSize: '20px!important',
        fontWeight: 500,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '23.4375px',
        letterSpacing: '0.15000000596046448px'
    },
    root: {
        alignSelf: 'flex-start',
        marginTop: '0px',
        flexBasis: '12.92%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '2.94%',
        marginRight: '3.18%',
        minHeight: '67px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    line: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '0px',
        minHeight: '0px'
    }
}));
