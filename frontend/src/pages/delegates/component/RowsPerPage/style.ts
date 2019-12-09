import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        alignSelf: 'center',
        flexBasis: '31.1%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '0%',
        minWidth: '88px',
        color: 'rgba(255, 255, 255, 0.699999988079071)',
        fontSize: '12px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '14.0625px'
    },
    typography1: {
        alignSelf: 'center',
        flexBasis: '18.02%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '4.77%',
        marginRight: '1.06%',
        minWidth: '51px',
        color: 'rgba(255, 255, 255, 0.699999988079071)',
        fontSize: '12px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '14.0625px',
        textTransform: 'capitalize'
    },
    root: {
        alignSelf: 'center',
        flexBasis: '17.69%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '15.19%',
        marginRight: '0%',
        minHeight: '24px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    button: {
        alignSelf: 'flex-end',
        marginBottom: '-0.0000019073486328125px',
        flexBasis: '8.48%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '1.06%',
        marginRight: '2.65%',
        minHeight: '24.000001907348633px'
    },
    root1: {
        height: '24.000001907348633px',
        minWidth: '24.000001907348633px'
    },
    button1: {
        alignSelf: 'stretch',
        flexBasis: '8.48%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '2.65%',
        marginRight: '0%',
        minHeight: '24px'
    },
    root2: {
        height: '24px',
        minWidth: '24px'
    }
}));
