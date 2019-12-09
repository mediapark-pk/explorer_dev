import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    tabs: {
        marginLeft: '8.33%',
        marginRight: '50.83%',
        marginTop: '40px',
        marginBottom: '12px',
        minHeight: '30px',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        overflow: 'hidden'
    },
    tab: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    root1: {
        marginRight: '12px',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '20px!important',
        fontWeight: 500,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '23.4375px',
        letterSpacing: '0.15000000596046448px'
    },
    root2: {
        marginLeft: '12px',
        marginRight: '12px',
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '20px!important',
        fontWeight: 500,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '23.4375px',
        letterSpacing: '0.15000000596046448px'
    },
    root3: {
        marginLeft: '12px',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '20px!important',
        fontWeight: 500,
        fontFamily: 'Roboto',
        textAlign: 'left',
        lineHeight: '23.4375px',
        letterSpacing: '0.15000000596046448px'
    },
    root: {
        position: 'absolute',
        bottom: '0px',
        right: '0px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMTkyMCIgaGVpZ2h0PSI2OTAiIHZpZXdCb3g9IjAgMCAxOTIwIDY5MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDBIMTkyMFY2OTBIMEwwIDBaIiBmaWxsPSIjMjAyOTQwIi8+Cjwvc3ZnPgo=")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 690px',
        backgroundPositionX: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));
