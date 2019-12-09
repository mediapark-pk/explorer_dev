import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        flexBasis: '13.73%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '6.37%',
        minWidth: '14px',
        color: 'rgba(255, 255, 255, 0.5400000214576721)',
        fontSize: '12px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '16px',
        letterSpacing: '0.4000000059604645px'
    },
    typography1: {
        alignSelf: 'stretch',
        flexBasis: '72.55%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '6.37%',
        marginRight: '0.98%',
        minWidth: '74px',
        color: 'rgba(61, 144, 227, 1)',
        fontSize: '18px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'right',
        lineHeight: '28px',
        letterSpacing: '0.5px'
    },
    root: {
        flexBasis: '100%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '0px',
        minHeight: '28px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    div: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '0px',
        minHeight: '28px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    div1: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '0px',
        minHeight: '0px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    vector21: {
        flexBasis: '73.53%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: 'auto',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '0px',
        minHeight: '0px'
    }
}));
