import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        marginLeft: '0.38%',
        marginRight: '73.66%',
        marginTop: '0px',
        marginBottom: '8px',
        minWidth: '68px',
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
        alignSelf: 'flex-start',
        marginTop: '0px',
        flexBasis: '13.65%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '1.69%',
        marginRight: '5.68%',
        minHeight: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));
