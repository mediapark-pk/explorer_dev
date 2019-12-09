import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        flexBasis: '36.02%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: 'auto',
        marginTop: '0px',
        marginBottom: '0px',
        minWidth: '67px',
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
        flexBasis: '76.34%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '2.15%',
        minWidth: '142px',
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
        flexBasis: '19.35%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '2.15%',
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
        alignSelf: 'stretch',
        flexBasis: '21.28%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '7.67%',
        marginRight: '11.21%',
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
