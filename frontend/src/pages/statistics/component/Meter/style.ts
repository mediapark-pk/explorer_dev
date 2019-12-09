import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        alignSelf: 'stretch',
        flexBasis: '49.58%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '8.33%',
        marginRight: '1.61%',
        minHeight: '84px',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    graph: {
        minHeight: '23px'
    },
    graph1: {
        minHeight: '30px'
    }
}));
