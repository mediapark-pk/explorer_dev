import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '456px'
    },
    headLabel: {
        fontSize: '20px',
        letterSpacing: '0.15px',
        fontWeight: 500,
        margin: '0 8px',
    },
    headAmount: {
        fontSize: '20px',
        letterSpacing: '0.15px',
        marginRight: '4px',
        fontWeight: 500,
        color: theme.palette.text.secondary,
    },
    headTip: {
        position: 'relative',
        top: '3px',
        fontSize: '12px',
        letterSpacing: '0.4px',
        color: theme.palette.text.secondary,
    },
    thead: {
        position: 'absolute',
        zIndex: 2,
        top: '5px',
    },
    tbody: {
        display: 'block',
        maxHeight: '300px',
        minHeight: '300px',
        marginTop: '40px',
        overflowY: 'scroll',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    appTable: {
        width: '100%',
    },
    table: {
        position: 'relative',
        overflow: 'hidden',
        '& tr': {
            display: 'flex',
            width: '100%',
        },
        '& td': {
            padding: '12px',
            overflow: 'hidden',
            position: 'relative',
        }
    },
    th: {
        padding: '12px',
        fontSize: '12px',
        letterSpacing: '0.4px',
        color: theme.palette.text.secondary,
    },
    alpha: {
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '1px',
        zIndex: 1,
    },
    alphaTop: {
        top: '39px',
    },
    alphaBottom: {
        bottom: '-1px',
    },
    button: {
        width: '252px',
        height: '56px',
        marginTop: '36px',
        color: theme.palette.primary.contrastText,
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: '4px',
    }
}));
