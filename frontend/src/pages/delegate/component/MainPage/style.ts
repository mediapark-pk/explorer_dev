import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
    wrapper: {
        marginTop: '68px',
    },
    loader: {
        position: 'absolute',
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));
