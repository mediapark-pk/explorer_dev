import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        marginLeft: '0%',
        marginRight: '82.06%',
        marginTop: '0px',
        marginBottom: '8px',
        minWidth: '47px',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '12px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '16px',
        letterSpacing: '0.4000000059604645px'
    },
    typography1: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '8px',
        marginBottom: '0px',
        minWidth: '262px',
        color: 'rgba(61, 144, 227, 1)',
        fontSize: '24px!important',
        fontWeight: 700,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '28.125px'
    },
    root: {
        alignSelf: 'stretch',
        flexBasis: '80.37%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '1.23%',
        minHeight: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));
