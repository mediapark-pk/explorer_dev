import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: '59px',
        marginBottom: '12px',
        minHeight: '40px',
    },
    typography: {
        marginLeft: '8%',
        fontSize: '34px!important',
        lineHeight: '39.84375px',
        color: theme.palette.text.primary
    },
}));
