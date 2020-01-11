import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    topContainer: {
        flexGrow: 1,
    },
    bottomContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '20%',
        marginTop: '20px',
    },
    chartMinimap: {
        position: 'relative',
        width: 'calc(75% - 250px)',
        height: '100%',
    },
    fromToSelector: {
        width: '140px',
    },
    timeZoomSelector: {
        
    }
}));
