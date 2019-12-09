import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        marginLeft: '0.64%',
        marginRight: '63.46%',
        marginTop: '0px',
        marginBottom: '8px',
        minWidth: '56px',
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
        minWidth: '156px',
        color: 'rgba(61, 144, 227, 1)',
        fontSize: '24px!important',
        fontWeight: 700,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '28.125px'
    },
    root: {
        alignSelf: 'center',
        flexBasis: '8.13%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '4.11%',
        marginRight: '3.72%',
        minHeight: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));
