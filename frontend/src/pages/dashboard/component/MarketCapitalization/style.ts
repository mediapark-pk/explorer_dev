import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        alignSelf: 'stretch',
        flexBasis: '63.78%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '1.02%',
        minWidth: '125px',
        color: 'rgba(255, 255, 255, 0.5400000214576721)',
        fontSize: '12px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '16px',
        letterSpacing: '0.4000000059604645px'
    },
    typography1: {
        alignSelf: 'stretch',
        flexBasis: '34.18%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '1.02%',
        marginRight: '0%',
        minWidth: '67px',
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '12px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '16px',
        letterSpacing: '0.4000000059604645px'
    },
    root: {
        alignSelf: 'center',
        flexBasis: '10.21%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '2.71%',
        marginRight: '2.71%',
        minHeight: '16px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));
