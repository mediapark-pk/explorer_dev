import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        flexBasis: '167.51%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '-33%',
        marginRight: '-34%',
        marginTop: '0px',
        marginBottom: '0px',
        minWidth: '45px',
        color: 'rgba(61, 144, 227, 1)',
        fontSize: '12px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'center',
        lineHeight: '16px',
        letterSpacing: '0.4000000059604645px'
    },
    root: {
        minHeight: '64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    div: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '1.5px',
        minHeight: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    div1: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '1.5px',
        marginBottom: '0px',
        minHeight: '45px'
    },
    ellipse: {
        minHeight: '24px'
    },
    vector21: {
        minHeight: '41px'
    }
}));
