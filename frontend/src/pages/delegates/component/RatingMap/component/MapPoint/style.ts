import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'absolute',
        width: '8px',
        height: '8px',
        background: theme.palette.text.secondary,
        borderRadius: '50%',
    },
}));
