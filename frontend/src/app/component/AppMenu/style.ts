import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    button: {
        display: 'flex',
        margin: '0 2px',
        minHeight: '56px',
        height: '56px',
        color: '#fff',
        fontSize: '12px!important',
        padding: '25px 1%',
        textTransform: 'uppercase',
        borderTop: '2px solid transparent',
        borderRadius: '0 0 2px 2px',
    },
    active: {
        color: 'rgba(61, 144, 227, 1)',
        borderTop: '2px solid rgba(61, 144, 227, 1)',
    },
    root: {
        alignSelf: 'flex-start',
        marginTop: '1px',
        flexGrow: 0.2,
        flexShrink: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}));
