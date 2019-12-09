import { Theme, ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { createMuiTheme, createStyles, makeStyles } from '@material-ui/core';

export const COLORS = {
        DDKRed: 'rgba(229, 92, 92, 1)',
        ExplorerBlue: 'rgba(61, 144, 227, 1)',
        DDKGreen: 'rgba(75, 209, 131, 1)',
        BlackInactive: 'rgba(0, 0, 0, 1)',
        DDKYellow: 'rgba(234, 182, 0, 1)'
};
export const PALETTE = {
    primary: {
        light: 'rgba(32, 41, 64, 1)'
    }
};
export const SHADOWS = {

};
export const CUSTOM_TYPOGRAPHY = {

};
export const THEME_TYPOGRAPHY = {

};

export const THEME: ThemeOptions = createMuiTheme({
    //palette: PALETTE,
    typography: THEME_TYPOGRAPHY,
    overrides: {
        MuiTableCell: {
            root: {
                borderBottom: 'none'
            }
        },
        MuiButton: {
           root: {
               padding: 0,
           },
           text: {
               padding: 0,
           }
        },
        MuiIconButton: {
            root: {
                padding: 0,
            }
        },
        MuiInput: {
            input: {
                padding: 0,
            },
            underline: {
                '&:before': 'none',
                '&:after': 'none'
            }
        },
        MuiSelect: {
            select: {
                '&:focus': {
                    backgroundColor: 'none'
                },
            }
        },
        MuiCheckbox: {
            root: {
                padding: 0,
            }
        },
        MuiRadio: {
            root: {
                padding: 0,
            }
        },
        MuiTab: {
            root: {
                padding: 0,
                minWidth: '0px!important',
                minHeight: '0px!important'
            }
        },
        MuiList: {
            root: {
                padding: 0,
            }
        },
        MuiListItem: {
            root: {
                padding: 0,
            },
            gutters: {
                padding: '0px!important',
            }
        }
    }
});

export const useWebkitForceScroll = makeStyles((theme: Theme) => ({
    webkitScroll: {
        overflow: 'auto',
        '-webkit-overflow-scrolling': 'touch',
        '-webkit-overflow': 'scroll',
    }
}));
