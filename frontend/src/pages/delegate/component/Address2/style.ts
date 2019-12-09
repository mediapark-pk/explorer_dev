import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    group: {
        alignSelf: 'flex-end',
        marginBottom: '2px',
        flexBasis: '7.36%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '1.23%',
        marginRight: '0%',
        minHeight: '24px',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    root: {
        flexBasis: '87.63%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: 'auto',
        marginTop: '0px',
        marginBottom: '0px',
        minHeight: '60px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    contentCopy24px: {
        alignSelf: 'flex-end',
        marginBottom: '2px',
        flexBasis: '7.36%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '1.23%',
        marginRight: '1.23%',
        minHeight: '24px'
    }
}));
