import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        alignSelf: 'center',
        flexBasis: '82.82%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '1.23%',
        minWidth: '135px',
        color: 'rgba(61, 144, 227, 0.800000011920929)',
        fontSize: '14px!important',
        fontWeight: 500,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '16px',
        letterSpacing: '0.75px',
        textTransform: 'capitalize'
    },
    root: {
        flexBasis: '8.49%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '20.05%',
        marginRight: '8.33%',
        minHeight: '24px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    baselineFavoriteBorder24px: {
        alignSelf: 'stretch',
        flexBasis: '14.72%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '1.23%',
        marginRight: '0%',
        minHeight: '24px'
    }
}));
