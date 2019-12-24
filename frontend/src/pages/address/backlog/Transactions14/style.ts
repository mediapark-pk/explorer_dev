import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        alignSelf: 'stretch',
        flexBasis: '23.5%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '1%',
        marginRight: '1%',
        minHeight: '568px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));
