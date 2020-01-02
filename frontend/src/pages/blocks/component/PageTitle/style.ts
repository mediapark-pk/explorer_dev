import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        flexBasis: '5.36%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '8%',
        marginRight: '86%',
        marginTop: '0px',
        marginBottom: '0px',
        minWidth: '103px',
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '34px',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '39.84375px',
        letterSpacing: '0.25px'
    },
    root: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '103px',
        marginBottom: '12px',
        minHeight: '40px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));
