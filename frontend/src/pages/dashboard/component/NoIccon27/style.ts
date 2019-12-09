import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        flexBasis: '100%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '0px',
        minWidth: '220px',
        color: 'rgba(61, 144, 227, 1)',
        fontSize: '14px!important',
        fontWeight: 500,
        fontFamily: 'Roboto',
        textAlign: 'center',
        lineHeight: '16px',
        letterSpacing: '0.75px',
        textTransform: 'capitalize'
    },
    root: {
        minHeight: '16px',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));
