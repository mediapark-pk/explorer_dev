import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '12px',
        marginBottom: '28.5px',
        minHeight: '468px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMTkyMCIgaGVpZ2h0PSI0NjgiIHZpZXdCb3g9IjAgMCAxOTIwIDQ2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDBIMTkyMFY0NjhIMEwwIDBaIiBmaWxsPSIjMjAyOTQwIi8+Cjwvc3ZnPgo=")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPositionY: 'center',
        backgroundPositionX: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    div: {
        alignSelf: 'stretch',
        flexBasis: '12.5%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '8.33%',
        marginRight: '0.83%',
        minHeight: '468px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    div1: {
        alignSelf: 'stretch',
        flexBasis: '9.01%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '0.83%',
        marginRight: '0.7%',
        minHeight: '468px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    div2: {
        alignSelf: 'stretch',
        flexBasis: '58.75%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '0.7%',
        marginRight: '8.33%',
        minHeight: '468px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    }
}));
