import { Theme, ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { createMuiTheme, makeStyles } from '@material-ui/core';

export const COLORS = {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    IRON: 'rgba(255, 255, 255, .8)',
    GRAY: 'rgba(255, 255, 255, .5)',
    SILVER: 'rgba(255, 255, 255, .2)',
    APPLE_BLOSSOM: '#B24343',
    JUNGLE_GREEN: '#1E9E8F',
    ENDEAVOUR: '#0052A5',
    CORN: '#EAB600',
    MIRAGE: '#1B2033',
    MIRAGE_D: '#1E243A',
    MIRAGE_L: '#202940',
    MIRAGE_LA: 'rgba(32, 41, 64, 0.5)',
    PICTON_BLUE: '#3D90E3',
    PICTON_BLUE_A7: 'rgba(61, 144, 227, 0.7);',
    PICTON_BLUE_A2: 'rgba(61, 144, 227, 0.2);'
};

export const PALETTE = {
    type: 'dark' as 'light' | 'dark',
    primary: {
        light: COLORS.IRON,
        main: COLORS.GRAY,
        dark: COLORS.SILVER,
        contrastText: COLORS.WHITE
    },
    secondary: {
        light: COLORS.ENDEAVOUR,
        main: COLORS.PICTON_BLUE_A7,
        dark: COLORS.PICTON_BLUE_A2,
        contrastText: COLORS.PICTON_BLUE
    },
    error: {
        main: COLORS.APPLE_BLOSSOM,
        contrastText: COLORS.WHITE
    },
    text: {
        primary: COLORS.WHITE,
        secondary: COLORS.GRAY,
        disabled: COLORS.SILVER,
        hint: COLORS.SILVER
    },
    action: {
        disabled: COLORS.GRAY,
        active: COLORS.PICTON_BLUE,
        hover: COLORS.WHITE,
    },
    backround: {
        default: COLORS.MIRAGE,
        level1: COLORS.MIRAGE_L,
        level2: COLORS.MIRAGE_LA,
    },
    divider: COLORS.SILVER
};

export const SHADOWS = {
    button: '0px -4px 8px rgba(0, 0, 0, 0.16)'
};
export const GRADIENTS = {
    pink: 'linear-gradient(180deg, #F20F61 -8.33%, #271E98 180.21%)',
};
export const BORDERS = {
    blue: `1px solid ${COLORS.PICTON_BLUE}`
};

export const THEME: ThemeOptions = createMuiTheme({
    palette: PALETTE,
    breakpoints: {
        values: {
            xl: 1920,
            lg: 1120,
            md: 928,
            sm: 744,
            xs: 0,
        },
    },
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
            },
            icon: {
                color: 'rgba(255, 255, 255, 0.54)'
            }
        },
        MuiOutlinedInput: {
            root: {
                height: '24px',
                fontSize: '12px !important',
                lineHeight: '16px',
                letterSpacing: '0.4px',
                color: 'rgba(255, 255, 255, 0.54)',
            },
            notchedOutline: {
                borderColor: 'rgba(255, 255, 255, 0.54)',
                '$root:hover &': {
                    borderColor: 'rgba(255, 255, 255, 1)'
                }
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
        },
        MuiSlider: {
            track: {
                backgroundColor: COLORS.PICTON_BLUE_A2,
                borderLeft: '2px solid ' + COLORS.PICTON_BLUE_A7,
                borderRight: '2px solid ' + COLORS.PICTON_BLUE_A7,
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
