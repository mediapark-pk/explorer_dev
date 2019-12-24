import { makeStyles, Theme } from '@material-ui/core/styles';
import { COLORS } from 'src/app/component/Theme/theme'; 

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        '&:nth-child(2n)': {
            background: COLORS.MIRAGE_D,            
        },
    },
    tableCell: {
        padding: '14px',
    },
    link: {
        color: theme.palette.secondary.contrastText,
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
    missed: {
        color: theme.palette.primary.light,
    }
}));
