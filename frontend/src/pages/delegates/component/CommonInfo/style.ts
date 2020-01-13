import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginRight: '-28px',
        '& .MuiGrid-spacing-xs-7': {
            margin: '16px -28px',
            '& > .MuiGrid-item': {
                padding: '40px 28px',
                margin: '2px 0'
            }
        }
    },
    title: {
        marginBottom: '9px',
        fontSize: '12px!important',
        lineHeight: '16px',
        letterSpacing: '0.4000000059604645px',
        color: theme.palette.text.secondary,
    },
    value: {
        minWidth: '240px',
        fontSize: '34px!important',
        fontWeight: 300,
        lineHeight: '39.84375px',
        color: theme.palette.text.primary
    }
}));
