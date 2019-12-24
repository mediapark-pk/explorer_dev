import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        alignSelf: 'flex-start',
        marginTop: '0px',
        flexBasis: '23.5%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '1%',
        marginRight: '1%',
        minHeight: '308px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));
