import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        alignSelf: 'center',
        flexBasis: '18.33%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '2%',
        marginRight: '2%',
        width: '352px',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '12px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '16px',
        letterSpacing: '0.4000000059604645px'
    },
    root: {
        minHeight: '192px',
        borderTop: '2px solid #15192A',
        backgroundColor: '#1B2033'
    },
    content: {
        padding: '48px 24px',
        maxWidth: '1648px',
        minWidth: '952px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexBasis: '100%',
        flexGrow: 1,
        flexShrink: 1,
    }
}));
