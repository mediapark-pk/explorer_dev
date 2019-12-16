import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
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
