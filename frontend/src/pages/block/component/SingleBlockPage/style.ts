import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '6px',
        marginBottom: '28px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    div: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '6px',
        minHeight: '28px',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    div1: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '6px',
        marginBottom: '10px',
        minHeight: '48px',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    div2: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '10px',
        marginBottom: '27px',
        minHeight: '174px',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    div3: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '27px',
        marginBottom: '0px',
        minHeight: '523px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}));
