import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginLeft: '8%',
        marginRight: '0%',
        marginTop: '10px',
        marginBottom: '12px',
        minHeight: '40px',
        display: 'flex',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));
