import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
    },
    tableRow: {
    },
    tableCell: {
        padding: '0 0 8px',
        fontSize: '12px',
        color: theme.palette.primary.main
    },
    tableCellRank: {
        paddingRight: '33px'
    },
    tableCellName: {
        paddingRight: '92px'
    },
    tableCellValue: {
        minWidth: '60px'
    },
    tableCellWrapper: {
        minHeight: '16px',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    headerTypography: {
        flexBasis: '100%',
        fontSize: '12px!important',
        letterSpacing: '0.4000000059604645px'
    },
}));
