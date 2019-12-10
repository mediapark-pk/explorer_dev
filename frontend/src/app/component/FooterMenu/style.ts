import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    button: {
        alignSelf: 'center',
        padding: '8px 16px',
        minWidth: 'auto',
        minHeight: '16px',
        fontSize: '11px!important',
        color: 'rgba(255, 255, 255, 1)',
    },
    row: {
        flexGrow: 0,
        flexShrink: 1,
    },
    root: {
        alignSelf: 'center',
        flexBasis: '33.65%!important',
        flexGrow: 0.2,
        flexShrink: 1,
        margin: '0 4% 0 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
}));
