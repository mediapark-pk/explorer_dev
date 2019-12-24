import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tabs: {
        minHeight: '30px',
    },
    tab: {
        marginRight: '24px',
        fontSize: '20px!important',
        lineHeight: '23.4375px',
        letterSpacing: '0.15000000596046448px',
        textTransform: 'none',
        color: theme.palette.primary.main,
        transition: 'color .1s linear',
        '&.Mui-selected': {
            color: theme.palette.primary.contrastText
        },
        '&:hover': {
            color: theme.palette.primary.light
        }
    },
    tabIndicator: {
        background: theme.palette.primary.contrastText
    }
}));
