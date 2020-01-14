import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: '2ex 0',
    },
    textField: {
        // borderBottom: 'none',
        backgroundColor: '#1E243A',
        padding: '2ex',
    },
    bottomWrapper: {
        display: 'flex',
        fontSize: '80%',
        marginBottom: '2ex',
        opacity: '.5',
    },
    counter: {
        textAlign: 'left',
        flexBasis: '50%',
    },
    saving: {
        textAlign: 'right',
        flexBasis: '50%',
    }
}));
