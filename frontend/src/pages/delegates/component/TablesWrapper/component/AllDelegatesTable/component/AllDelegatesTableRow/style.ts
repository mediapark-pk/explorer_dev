import { makeStyles, Theme } from '@material-ui/core/styles';
import { COLORS } from 'src/app/component/Theme/theme';

export const useStyles = makeStyles((theme: Theme) => ({
    tableCell: {
        background: theme.palette.secondary.dark,
        padding: '14px',
    },
    link: {
        color: theme.palette.primary.contrastText,
    },
    status: {
        '&.active': {
            color: COLORS.JUNGLE_GREEN,
        },
        '&.inactive': {
            color: COLORS.APPLE_BLOSSOM,
        }
    },
    uptime: {
        color: theme.palette.text.primary,
        textAlign: 'center',
    },
    votes: {
        color: theme.palette.text.hint,
        textAlign: 'center',
    },
    forged: {
        color: theme.palette.text.hint,
        textAlign: 'center',
    },
    active: {
        color: theme.palette.text.hint,
        textAlign: 'center',
    },
    missed: {
        color: theme.palette.text.hint,
    }
}));
