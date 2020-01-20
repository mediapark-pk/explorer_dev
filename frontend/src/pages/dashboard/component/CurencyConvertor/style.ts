import { makeStyles, Theme } from '@material-ui/core/styles';
import { COLORS } from 'src/app/component/Theme/theme';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        margin: '56px 160px',
        maxWidth: '1600px',
    },
    title: {
        width: '251px',
        height: 0,
    },
    icon: {
        marginRight: '12px',
    },
    head: {
        marginBottom: '39px',
        marginRight: '130px',
        minWidth: '248px',
        '&:last-child': {
            marginRight: 0,
        }
    },
    headLabel: {
        marginBottom: '12px',
        fontSize: '18px',
        letterSpacing: '0.5px',
        color: theme.palette.text.primary,        
    },
    headLabelText: {
        textTransform: 'uppercase',
    },
    change: {
        marginLeft: '8px',
        '&.positive': {
            color: COLORS.JUNGLE_GREEN,
        },
        '&.negative': {
            color: COLORS.APPLE_BLOSSOM,
        },
    },
    field: {
        width: '248px',
        borderBottom: `1px solid ${theme.palette.text.disabled}`,
        '& input': {
            fontWeight: 500,
            fontSize: '20px',
            letterSpacing: '0.15px',
            color: theme.palette.primary.contrastText,
        }
    },
    row: {
        height: '44px',
        padding: '0 8px',
        '&:nth-child(2n-1)': {
            backgroundColor: theme.palette.secondary.light,
        },
        '& > div:not(:first-child):not(:last-child)': {
            minWidth: '378px',
        }
    },
    select: {
        fontSize: '18px',
        letterSpacing: '0.5px',
        color: theme.palette.primary.contrastText,

        '& > div': {
            paddingRight: '0 !important',
            paddingLeft: '32px',
        },
        '& > svg': {
            left: 0,
            right: 'auto',
            color: theme.palette.primary.contrastText,
        }
    },
    label: {
        minWidth: '370px',
        fontSize: '18px',
        letterSpacing: '0.5px',
        color: theme.palette.text.secondary,
    }
}));
