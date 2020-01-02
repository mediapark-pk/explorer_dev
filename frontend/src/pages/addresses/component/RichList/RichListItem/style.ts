import { makeStyles, Theme } from '@material-ui/core/styles';
import { COLORS } from 'src/app/component/Theme/theme';

export const useStyles = makeStyles((theme: Theme) => ({
    div: {
        alignSelf: 'stretch',
        flex: 'auto',
        fontSize: '14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingBottom: '5px',
    },
    link: {
        color: COLORS.PICTON_BLUE,
    },
}));
