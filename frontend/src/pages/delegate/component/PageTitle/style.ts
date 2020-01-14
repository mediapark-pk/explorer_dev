import { makeStyles, Theme } from '@material-ui/core/styles';
import { COLORS } from 'src/app/component/Theme/theme';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: '12px 8.33%',
        minHeight: '40px',
        background: theme.palette.secondary.contrastText,
    },
    base: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        marginRight: '0.42%',
        marginLeft: '6px',
    },
    top: {
        fontSize: '12px!important',
    },
    badge: {
        justifySelf: 'flex-start',
        background: COLORS.MANDY,
        padding: '4px 6px',
        borderRadius: '4px',
        marginTop: '2px',
    },
    title: {
        marginLeft: '0.42%',
        marginRight: '0.42%',
        fontSize: '34px!important',
    },
    favoriteWrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    titleWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
    },
    button_icon: {
        height: '24px',
        color: theme.palette.text.secondary,
    },
    button_text: {
        color: theme.palette.text.secondary,
        fontSize: '18px!important',
        textTransform: 'none',
    }
}));
