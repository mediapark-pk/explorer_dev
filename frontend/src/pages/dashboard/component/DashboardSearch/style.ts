import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 0',
        backgroundImage: 'url("/public/img/dashboard-bg.svg")',
        backgroundPosition: '0 -6px',
    },
    dropdown: {
        backgroundColor: theme.palette.secondary.contrastText,
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: '4px 0 0 4px',
        cursor: 'pointer',
        '& .MuiSelect-icon': {
            right: '16px',
            marginTop: '1px',
            color: theme.palette.primary.contrastText,
        },
        '&:focus': {
            outlineColor: theme.palette.primary.light,
        }
    },
    select: {
        display: 'flex',
        width: '156px',
        height: '54px',
        padding: '0 16px',
        fontSize: '16px',
        letterSpacing: '0.15px',
        alignItems: 'center',
        color: theme.palette.primary.contrastText,
        '&:focus': {
            outlineColor: theme.palette.primary.light,
        }
    },
    searchField: {
        width: '394px',
        height: '56px',
        backgroundColor: theme.palette.secondary.contrastText,
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderLeft: 'none',
    },
    searchFieldInput: {
        height: '54px',
        padding: '0 17px',
    },
    button: {
        width: '186px',
        height: '56px',
        padding: '0 16px 0 19px',
        background: theme.palette.primary.contrastText,
        color: theme.palette.text.primary,
        borderRadius: '0',
        '&:hover': {
            background: theme.palette.primary.main,
        }
    },
    buttonIcon: {
        fontSize: '24px',
    },
    buttonLabel: {
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0.75px',
        flexGrow: 1,
    }
}));
