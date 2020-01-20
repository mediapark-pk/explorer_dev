import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '706px',
        background: theme.palette.secondary.main,
        padding: '65px 160px',
    }
}));
