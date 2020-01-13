import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginLeft: '0%',
        marginRight: '0%',
        padding: '0% 8%',
        marginTop: '12px',
        marginBottom: '28px',
        minHeight: '468px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPositionY: 'center',
        backgroundPositionX: 'center',
        backgroundColor: '#202940',
    },
    blockchainInfoTitle: {
        marginBottom: '3px',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '12px',
        fontWeight: 400,
        fontFamily: 'Roboto',
    },
    blockchainInfo: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '56px',
        marginBottom: '42.5px',
        minWidth: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));
