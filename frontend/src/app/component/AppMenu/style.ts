import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    button: {
        alignSelf: 'stretch',
        flex: 'auto',
        marginLeft: '0%',
        marginRight: '3%',
        minHeight: '51px',
        backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iODEiIGhlaWdodD0iMiIgdmlld0JveD0iMCAwIDgxIDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDFIODAuNSIgc3Ryb2tlPSIjM0Q5MEUzIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+Cg==")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '80.5px 2px',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        height: '51px',
        minWidth: '83px',
        color: 'rgba(61, 144, 227, 1)',
        fontSize: '11px!important',
        // fontWeight: 700,
        fontFamily: 'Roboto',
        textAlign: 'left',
        // lineHeight: '30px',
        padding: '25px 0',
        letterSpacing: '1.5px',
        textTransform: 'uppercase'
    },
    root: {
        alignSelf: 'flex-start',
        marginTop: '1px',
        flexBasis: '36.12%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '1.39%',
        marginRight: '7.4%',
        minHeight: '51px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));
