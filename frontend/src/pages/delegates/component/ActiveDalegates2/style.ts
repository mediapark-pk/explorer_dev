import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '3px',
        minWidth: '173px',
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
        marginTop: '3px',
        marginBottom: '0px',
        minWidth: '173px',
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '34px!important',
        fontWeight: 300,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '39.84375px',
        letterSpacing: '0.25px'
    },
    root: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '56px',
        marginBottom: '42.5px',
        minHeight: '62px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));
