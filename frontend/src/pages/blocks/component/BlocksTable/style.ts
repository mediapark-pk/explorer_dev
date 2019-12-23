import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginLeft: '8%',
        marginRight: '8%',
        marginTop: '28px',
        marginBottom: '-23px',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    appTable: {
        flexBasis: '100%',
        flexGrow: 0,
        flexShrink: 1,
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        minHeight: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    appTableTitle: {
        fontSize: '20px',
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '0px',
        marginBottom: '12px',
        minHeight: '24px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    button: {
        alignSelf: 'stretch',
        flexBasis: '10.19%!important',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: '1.47%',
        marginRight: '31.81%',
        minHeight: '24px',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    table: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: '12px',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    tableHead: {
        minHeight: '44px',
        backgroundColor: '#202940',
    },
     tableHeadTitle: {
        '&:nth-child(2)': {
      marginRight: theme.spacing(2),
    },
        display: 'flex',
        color: 'rgba(255, 255, 255, 0.5)',
        fontWeight: 400,
        fontFamily: 'Roboto',

    },
    tableRow: {
        minHeight: '25px',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    appTableBody: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    contrast: {
        color: 'rgba(61, 144, 227, 1)!important',
    }
}));
