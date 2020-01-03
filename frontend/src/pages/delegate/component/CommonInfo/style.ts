import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        margin: '28px 0 28px -28px',
        '& .MuiGrid-spacing-xs-7': {
            margin: 0,
        }
    },
    copyIcon: {
        transform: 'scale(0.9, -1.1)',
        color: theme.palette.primary.contrastText,
    },
    copyIconButton: {
        margin: '0 2.46%',
        minWidth: '24px',
        minHeight: '24px',
        height: '24px',
    },
    label: {
        color: theme.palette.text.secondary,
        fontSize: '12px!important',
        lineHeight: '16px',
    },
    value: {
        marginTop: '3px',
        fontSize: '34px!important',
        fontWeight: 300,
        lineHeight: '40px',
    },
    valueLink: {
        display: 'inline-flex',
        alignItems: 'center',
        marginTop: '3px',
        fontSize: '24px!important',
        fontWeight: 'bold',
        lineHeight: '40px',
        color: theme.palette.primary.contrastText,
    },
    sub: {
        marginLeft: '5px',
        fontSize: '18px!important',
        fontWeight: 300,
    }
}));
