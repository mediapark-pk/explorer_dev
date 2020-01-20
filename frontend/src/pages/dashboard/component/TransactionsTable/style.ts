import { makeStyles, Theme } from '@material-ui/core/styles';
import { COLORS } from 'src/app/component/Theme/theme';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    link: {
        color: theme.palette.primary.contrastText,
    },
    tLink: {
        minWidth: '57px',
        maxWidth: '57px',
        marginRight: '43px',
    },
    tTime: {
        minWidth: '94px',
        maxWidth: '94px',
    },
    tFee: {
        width: '100%',
    },
    shadow: {
        position: 'absolute',
        right: '-1px',
        top: 0,
        height: '100%',
        width: '1px',
        boxShadow: `${theme.palette.secondary.contrastText} 0 0 20px 12px`,
    },
    status: {
        textTransform: 'capitalize',
        '&.FORGED': {
            color: COLORS.JUNGLE_GREEN,
        },
        '&.FORGING': {
            color: COLORS.PICTON_BLUE,
        },
        '&.WAITING': {
            color: COLORS.CORN,
        },
        '&.MISSED': {
            color: COLORS.APPLE_BLOSSOM,
        },
    }
}));
