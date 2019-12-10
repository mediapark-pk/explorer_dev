import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    sign: {
        marginRight: '10px',
    },
    text: {
    },
    img: {
        width: '100%',
    }
}));
