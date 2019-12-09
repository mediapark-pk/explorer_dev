import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexBasis: '100%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '0px',
        minHeight: '526px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMTkyMCIgaGVpZ2h0PSI1MTgiIHZpZXdCb3g9IjAgMCAxOTIwIDUxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDBIMTkyMFY1MThIMEwwIDBaIiBmaWxsPSIjMjAyOTQwIi8+Cjwvc3ZnPgo=")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 518px',
        backgroundPositionX: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    div: {
        alignSelf: 'stretch',
        flex: 'auto',
        marginLeft: '8.33%',
        marginRight: '2%',
        minHeight: '526px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    div1: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '56px',
        marginBottom: '28px',
        minHeight: '62px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    div2: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '28px',
        marginBottom: '28px',
        minHeight: '60px',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    div3: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '28px',
        marginBottom: '28px',
        minHeight: '62px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    div4: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '28px',
        marginBottom: '56px',
        minHeight: '62px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    div5: {
        alignSelf: 'stretch',
        flex: 'auto',
        marginLeft: '2%',
        marginRight: '8.33%',
        minHeight: '526px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
}));
