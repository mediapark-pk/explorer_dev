import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    favorite: {
        marginRight: '2.5%',
        color: theme.palette.primary.main,
        fontSize: '14px!important',
        fontWeight: 500,
        letterSpacing: '0.75px',
        textTransform: 'uppercase',
        minWidth: '146px',
        '&:hover': {
            fontWeight: 900,
        }
    },
    favoriteIcon: {
        height: '24px',
        color: theme.palette.primary.main,
    },
}));
