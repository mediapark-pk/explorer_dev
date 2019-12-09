import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexBasis: '100%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '9px',
        marginBottom: '8px',
        minHeight: '67px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));
