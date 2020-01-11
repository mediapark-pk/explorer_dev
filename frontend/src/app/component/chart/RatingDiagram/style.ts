import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginBottom: '85px',
        // alignSelf: 'flex-end',
        position: 'relative',
    },
    chart: {
        height: '100%',
    },
    chartTitle: {
        position: 'absolute',
        color: '#fff',
        textAlign: 'center',
        width: '100%',
        top: 'calc(50% - 2ex)',
        font: 'bold 30px sans-serif',
    }
}));
