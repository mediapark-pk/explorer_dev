import { Theme, ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { createMuiTheme, createStyles, makeStyles } from '@material-ui/core';

export const COLORS = {
    red: 'rgba(229, 92, 92, 1)',
    blue: 'rgba(61, 144, 227, 1)',
    green: 'rgba(75, 209, 131, 1)',
    black: 'rgba(0, 0, 0, 1)',
    yellow: 'rgba(234, 182, 0, 1)',
    white: '#FFFFFF',
};
export const PALETTE = {
    primary: {
        light: 'rgba(32, 41, 64, 1)',
        text: {
            primary: COLORS.white,
            secondary: COLORS.blue,

        },
    }
};
export const SHADOWS = {};
export const CUSTOM_TYPOGRAPHY = {};
export const THEME_TYPOGRAPHY = {
    blue: 'rgba(61, 144, 227, 0.800000011920929)',
    gray: 'rgba(255, 255, 255, 0.5)',
    white: 'rgba(255, 255, 255, 1)',
};

export const THEME: ThemeOptions = createMuiTheme({

    overrides: {
        MuiTypography: {
            body1: {
                fontSize: 'inherit'
            },
        },
        MuiTableCell: {
            root: {
                borderBottom: 'none',
            },
            body: {
                 color: 'rgba(255, 255, 255, 1)',
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
