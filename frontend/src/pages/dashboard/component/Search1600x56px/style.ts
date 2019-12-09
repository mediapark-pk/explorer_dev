import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    textField: {
        alignSelf: 'stretch',
        flexBasis: '53.53%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '0%',
        minHeight: '56px',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    typography: {
        flexBasis: '100%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '0px',
        minWidth: '394px',
        color: 'rgba(255, 255, 255, 0.5400000214576721)',
        fontSize: '16px!important',
        fontWeight: 400,
        fontFamily: 'Roboto',
        textAlign: 'center',
        lineHeight: '24px',
        letterSpacing: '0.15000000596046448px'
    },
    button: {
        alignSelf: 'stretch',
        flexBasis: '25.27%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '0%',
        minHeight: '56px',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    root1: {
        height: '56px',
        minWidth: '186px'
    },
    root: {
        flexBasis: '38.33%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '29%',
        marginRight: '32%',
        marginTop: '0px',
        marginBottom: '0px',
        minHeight: '56px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iNzM3IiBoZWlnaHQ9IjU3IiB2aWV3Qm94PSIwIDAgNzM3IDU3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjczNiIgaGVpZ2h0PSI1NiIgcng9IjQiIGZpbGw9IiMxQjIwMzMiIHN0cm9rZT0iIzNEOTBFMyIvPgo8bGluZSB4MT0iMTU3IiB5MT0iMC41IiB4Mj0iMTU3IiB5Mj0iNTYuNSIgc3Ryb2tlPSIjM0Q5MEUzIi8+Cjwvc3ZnPgo=")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPositionY: 'center',
        backgroundPositionX: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1599999964237213)'
    }
}));
