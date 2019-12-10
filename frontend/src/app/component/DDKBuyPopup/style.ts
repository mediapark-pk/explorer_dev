import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: '25px',
        color: 'white',
        backgroundColor: '#1B2033',
        width: '500px',
        border: 'none',
        borderRadius: '0',
    },
    h3: {
        textAlign: 'center',
    },
    p: {
        margin: '2ex 0',
    },
    logos: {
        textAlign: 'center',
    },
    button: {
        display: 'inline-block',
        background: 'white',
        height: '56px',
        width: '192px',
        border: '2px solid #3D90E3',
        padding: '8px 16px',
        margin: '12px',
        '&:hover': {
            background: 'white',
        }
    }
}));
