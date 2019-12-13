import { makeStyles, Theme as DefaultTheme, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '4px',
        width: '100%'
    },
    text: {
        color: theme.typography.body1.color
    }
}));
