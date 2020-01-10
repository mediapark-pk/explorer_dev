import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        position: 'relative',
        display: 'flex',
        width: '100%',
        backgroundColor: '#202940',
    },
    content: {
        [theme.breakpoints.up('sm')]: {
            paddingTop: 100,
        },
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '600px',
    },
    title: {
        color: '#fff',
        [theme.breakpoints.down('sm')]: {
            fontSize: 24,
        },
    },
    subtitle: {
        paddingTop: 40,
        [theme.breakpoints.down('sm')]: {
            fontSize: 18,
        },
        display: 'flex',
    },
    button: {
        marginTop: 40,
        textTransform: 'none',
        color: 'rgba(255, 255, 255, 0.5)',
        minWidth: '30%',
        minHeight: '28px',
    },

}));
