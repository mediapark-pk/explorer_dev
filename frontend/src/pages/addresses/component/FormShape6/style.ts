import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        minWidth: '41px',
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '14px!important',
        fontWeight: 700,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '16px',
        letterSpacing: '-2.5999999046325684px'
    },
    root: {
        position: 'absolute',
        bottom: '0px',
        right: '0px',
        minHeight: '56px'
    }
}));
