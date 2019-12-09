import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '12px',
        marginBottom: '0px',
        minHeight: '1052px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDUyIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDUyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMEgxOTIwVjEwNTJIMEwwIDBaIiBmaWxsPSIjMjAyOTQwIi8+Cjwvc3ZnPgo=")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPositionY: 'center',
        backgroundPositionX: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    div: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '56px',
        marginBottom: '16px',
        minHeight: '292px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    div1: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '16px',
        marginBottom: '16px',
        minHeight: '292px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    div2: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '16px',
        marginBottom: '56px',
        minHeight: '292px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}));
