import { makeStyles, Theme } from '@material-ui/core/styles';
import { COLORS } from 'src/app/component/Theme/theme';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        background: COLORS.MIRAGE_L,
    },
    tableCell: {
        padding: '14px 8px',
        color: theme.palette.primary.main,
        fontSize: '14px',
        fontWeight: 'normal',
    },
    tableCellCentered: {
        padding: '14px 8px',
        color: theme.palette.primary.main,
        fontSize: '14px',
        fontWeight: 'normal',
        textAlign: 'center',
    }
}));
