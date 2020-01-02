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
}));
