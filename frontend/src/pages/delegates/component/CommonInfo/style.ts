import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        marginTop: '12px',
        marginBottom: '28.5px',
    },
    leftSide: {
        display: 'flex',
        marginRight: '0.83%',
        flexDirection: 'column',
    },
    rightSide: {
        display: 'flex',
        marginLeft: '0.83%',
        marginRight: '0.7%',
        flexDirection: 'column',
    },
    infoBlock: {
        marginTop: '54px',
        marginBottom: '33.5px',
    },
    title: {
        marginBottom: '9px',
        fontSize: '12px!important',
        lineHeight: '16px',
        letterSpacing: '0.4000000059604645px',
        color: theme.palette.primary.main,
    },
    value: {
        minWidth: '240px',
        fontSize: '34px!important',
        fontWeight: 300,
        lineHeight: '39.84375px',
        color: theme.palette.primary.contrastText
    }
}));
