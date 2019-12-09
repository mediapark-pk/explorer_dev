import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexBasis: '100%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: 'auto',
        marginTop: '49px',
        marginBottom: '48px',
        minHeight: '313px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    div: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '8px',
        minHeight: '213px',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    div1: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '8px',
        marginBottom: '0px',
        minHeight: '84px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}));
