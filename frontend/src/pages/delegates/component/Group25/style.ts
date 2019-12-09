import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        flexBasis: '50%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '25%',
        marginRight: '25%',
        marginTop: '0px',
        marginBottom: '0px',
        minWidth: '8px',
        color: 'rgba(32, 41, 64, 1)',
        fontSize: '12px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'center',
        lineHeight: '16px'
    },
    root: {
        flexBasis: '100%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '0px',
        minHeight: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderRadius: '16px 16px 16px 16px'
    }
}));
