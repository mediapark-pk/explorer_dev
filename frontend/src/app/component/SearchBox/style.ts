import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: 1,
        borderBottom: '1px solid rgba(255, 255, 255, .5)',
        backgroundColor: '#1B2033',
        position: 'relative',
        zIndex: 2,
        padding: '4px 0',
        left: '24px'
    },
    goSearchButton: {
        color: '#fff',
        fontSize: '16px',
        padding: '0 1ex',
        textTransform: 'none',
    },
    searchBoxIcon: {
        width: '24px',
        height: '24px',
   },
    searchInput: {
        flexGrow: 1,
        color: '#fff',
        verticalAlign: 'middle',
        padding: '0 1ex',
    },
    searchBoxClose: {
        margin: '0 1ex',
    }
}));
