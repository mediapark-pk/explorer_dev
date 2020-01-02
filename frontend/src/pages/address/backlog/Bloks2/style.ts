import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '22px',
        marginBottom: '39px',
        minWidth: '376px',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '14px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '20px',
        letterSpacing: '0.25px'
    },
    root: {
        alignSelf: 'flex-start',
        marginTop: '0px',
        flexBasis: '23.5%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '1%',
        marginRight: '0%',
        minHeight: '151px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));
