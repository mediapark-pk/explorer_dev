import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        flexBasis: '8.51%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '4%',
        marginRight: '87%',
        marginTop: '0px',
        marginBottom: '0px',
        minWidth: '32px',
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '12px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '16px',
        letterSpacing: '0.4000000059604645px'
    },
    typography1: {
        alignSelf: 'stretch',
        flexBasis: '81.91%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '0.07%',
        marginRight: '13.83%',
        minWidth: '308px',
        color: 'rgba(255, 255, 255, 0.8700000047683716)',
        fontSize: '16px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '24px',
        letterSpacing: '0.15000000596046448px'
    },
    root: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '18px',
        marginBottom: '18px',
        minHeight: '76px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    div: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '-8px',
        marginBottom: '5px',
        minHeight: '16px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    div1: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '5px',
        marginBottom: '34px',
        minHeight: '24px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textCursor: {
        alignSelf: 'flex-start',
        marginTop: '1px',
        flexBasis: '0.24%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '3.88%',
        marginRight: '0.07%',
        minHeight: '17px'
    }
}));
