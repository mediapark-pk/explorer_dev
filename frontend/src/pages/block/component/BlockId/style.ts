import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        flexBasis: '15.46%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: 'auto',
        marginTop: '0px',
        marginBottom: '0px',
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
        alignSelf: 'stretch',
        flexBasis: '90.79%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '0.66%',
        minWidth: '276px',
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '24px!important',
        fontWeight: 700,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '28.125px'
    },
    root: {
        alignSelf: 'center',
        flexBasis: '15.83%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '8.33%',
        marginRight: '4.11%',
        minHeight: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    div: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '8px',
        minHeight: '16px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    div1: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '8px',
        marginBottom: '0px',
        minHeight: '28px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contentCopy24px: {
        alignSelf: 'center',
        flexBasis: '7.89%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '0.66%',
        marginRight: '0%',
        minHeight: '24px'
    }
}));
