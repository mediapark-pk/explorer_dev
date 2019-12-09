import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
        lineHeight: '16px',
        letterSpacing: '0.75px',
        textTransform: 'capitalize'
    },
    root: {
        minWidth: '154px',
        minHeight: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, rgba(242, 15, 97, 1) -8%, rgba(39, 30, 152, 1) 180%)',
        boxShadow: '0px -4px 8px rgba(0, 0, 0, 0.16)',
        borderRadius: '4px 4px 4px 4px'
    },
    button: {
        
    }
}));
