import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
    },
    wrapper: {
        width: '611px',
        overflow: 'hidden',
    },
    map: {
        width: '652px',
        position: 'relative',
        left: '-18px',
    }
}));
