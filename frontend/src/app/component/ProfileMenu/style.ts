import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        alignSelf: 'flex-start',
        flexBasis: '15.47%!important',
        flexShrink: 1,
        minHeight: '80px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: '220px',
    },
    profileButton: {
        flexGrow: 1,
        flexShrink: 1,
        marginRight: '4%',
    }
}));
