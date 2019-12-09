import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        flexBasis: '32.14%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '1%',
        marginRight: '67%',
        marginTop: '0px',
        marginBottom: '0px',
        minWidth: '45px',
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
        flexBasis: '74.29%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '1.43%',
        minWidth: '104px',
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
        marginBottom: '1px',
        flexBasis: '22.86%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '1.43%',
        marginRight: '0%',
        minWidth: '32px',
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '16px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '24px',
        letterSpacing: '0.15000000596046448px'
    },
    root: {
        alignSelf: 'stretch',
        flexBasis: '7.29%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '2.97%',
        marginRight: '1.69%',
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
