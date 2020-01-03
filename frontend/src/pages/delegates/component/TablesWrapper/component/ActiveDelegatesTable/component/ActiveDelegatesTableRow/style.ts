import { makeStyles, Theme } from '@material-ui/core/styles';
import { COLORS } from 'src/app/component/Theme/theme'; 

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        '&:nth-child(2n)': {
            background: theme.palette.secondary.dark,            
        },
    },
    tableCell: {
        padding: '14px',
    },
    link: {
        color: theme.palette.primary.contrastText,
    },
    status: {
        '&.forged': {
            color: COLORS.JUNGLE_GREEN,
        },
        '&.forging': {
            color: COLORS.APPLE_BLOSSOM,
        },
        '&.waiting': {
            color: COLORS.CORN,
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
    missed: {
        color: theme.palette.text.hint,
    }
}));
