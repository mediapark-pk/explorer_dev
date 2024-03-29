import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    button: {
        flexBasis: '3.65%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '8%',
        marginRight: '88%',
        marginTop: '0px',
        marginBottom: '0px',
        minHeight: '28px',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        minWidth: '80px',
        color: 'rgba(255, 255, 255, 0.5)',
        textTransform: 'none'
    },
    root: {
        flexBasis: '100%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '0px',
        minHeight: '28px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        overflow: 'hidden'
    },
}));
