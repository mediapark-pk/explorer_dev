import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: '1696px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(27, 32, 51, 1)',
        overflow: 'hidden'
    },
    div: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '28px',
        minHeight: '1448px'
    },
    main: {
        width: '100%',
        minHeight: '1392px',
        marginTop: '80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1872px 147px',
        backgroundPositionX: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));
