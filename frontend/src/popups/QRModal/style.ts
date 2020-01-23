import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => createStyles({
    title: {
        textAlign: 'center',
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.main,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 15,
        wordBreak: 'break-all',
        alignItems: 'center',
    },
    root: {
        backgroundColor: theme.palette.secondary.contrastText,
        [theme.breakpoints.up('sm')]: {
            padding: '0px 65px 65px !important',
        },
    },
    bg: {
        backgroundColor: theme.palette.secondary.contrastText,
    },
    icon: {
        color: theme.palette.primary.contrastText,
        fontSize: '1.75em',
        borderRadius: '4px',
        overflow: 'hidden !important',
    },
    qrCodeIcon: {
        minWidth: '24px',
        minHeight: '24px',
        height: '24px',
        width: '24px',
    },
}));
