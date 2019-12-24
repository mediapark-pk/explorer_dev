import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        marginBottom: '20px',
        justifyContent: 'space-between',
    },
    filterField: {
        minWidth: '108px',
    }
}));
