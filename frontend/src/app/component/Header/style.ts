import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        flexBasis: '100%',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        // !important should fix white background when pop up is displayed
        backgroundColor: '#1B2033 !important'
    },
    toolbar: {
        flexBasis: '100%',
        flexGrow: 1,
        flexShrink: 1,
        margin: '0 auto',
        padding: '0 24px',
        minHeight: '80px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1648px',
        minWidth: '952px',
    }
}));
