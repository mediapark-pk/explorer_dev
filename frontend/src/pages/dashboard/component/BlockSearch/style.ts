import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '20px',
        marginBottom: '48px',
        minHeight: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));
