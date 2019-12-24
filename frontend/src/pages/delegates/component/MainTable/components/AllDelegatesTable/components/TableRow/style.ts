import { makeStyles, Theme } from '@material-ui/core/styles';
import { COLORS } from 'src/app/component/Theme/theme';

export const useStyles = makeStyles((theme: Theme) => ({
    tableCell: {
        background: COLORS.MIRAGE_D,
        padding: '14px',
    },
    link: {
        color: theme.palette.secondary.contrastText,
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
        color: theme.palette.primary.contrastText,
        textAlign: 'center',
    },
    votes: {
        color: theme.palette.primary.light,
        textAlign: 'center',
    },
    forged: {
        color: theme.palette.primary.light,
        textAlign: 'center',
    },
    active: {
        color: theme.palette.primary.light,
        textAlign: 'center',
    },
    missed: {
        color: theme.palette.primary.light,
    }
}));
