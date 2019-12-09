import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        alignSelf: 'flex-start',
        marginTop: '1px',
        flexBasis: '15.47%!important',
        flexGrow: 1,
        flexShrink: 1,
        // marginLeft: '7.4%',
        // marginRight: '8.33%',
        minHeight: '80px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    profileButton: {
        // alignSelf: 'flex-start',
        // marginTop: '0px',
        // flexBasis: '8.08%!important',
        flexGrow: 1,
        flexShrink: 1,
        // marginLeft: '5.05%',
        marginRight: '10%',
        // minHeight: '51px'
    }
}));
