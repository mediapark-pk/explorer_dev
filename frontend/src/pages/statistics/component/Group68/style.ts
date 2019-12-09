import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        alignSelf: 'flex-end',
        marginBottom: '0.0001163482666015625px',
        flexBasis: '5.56%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '0.6%',
        marginRight: '0%',
        minWidth: '79.97119140625px',
        color: 'rgba(255, 255, 255, 0.5400000214576721)',
        fontSize: '12px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'center',
        lineHeight: '16px',
        letterSpacing: '0.4000000059604645px'
    },
    root: {
        minHeight: '41.12022399902344px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    vector: {
        alignSelf: 'flex-start',
        marginTop: '0px',
        flexBasis: '0%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '21.33%',
        marginRight: '0.6%',
        minHeight: '3.8154425621032715px'
    }
}));
