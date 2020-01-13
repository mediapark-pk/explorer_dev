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
        color: theme.palette.text.secondary,
        transition: 'color .1s linear',
        '&.Mui-selected': {
            color: theme.palette.text.primary
        },
        '&:not(.Mui-selected):hover': {
            color: theme.palette.text.hint
        }
    },
    tabIndicator: {
        background: theme.palette.text.primary
    }
}));
