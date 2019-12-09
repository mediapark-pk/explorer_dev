import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        flexBasis: '30.5%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: 'auto',
        marginTop: '0px',
        marginBottom: '0px',
        minWidth: '43px',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '12px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '16px',
        letterSpacing: '0.4000000059604645px'
    },
    typography1: {
        alignSelf: 'stretch',
        flexBasis: '74.47%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '0%',
        minWidth: '105px',
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '34px!important',
        fontWeight: 300,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '39.84375px',
        letterSpacing: '0.25px'
    },
    typography2: {
        alignSelf: 'flex-end',
        marginBottom: '0px',
        flexBasis: '25.53%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '0%',
        minWidth: '36px',
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '18px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '28px',
        letterSpacing: '0.5px'
    },
    root: {
        alignSelf: 'center',
        flexBasis: '7.34%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '3.72%',
        marginRight: '3.88%',
        minHeight: '62px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    div: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '3px',
        minHeight: '16px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    div1: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '3px',
        marginBottom: '0px',
        minHeight: '40px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}));
