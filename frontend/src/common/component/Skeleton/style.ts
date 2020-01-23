import { makeStyles, Theme } from '@material-ui/core/styles';

export interface IStyleProps { 
    width?: number | string;
    height?: number | string;
    inline?: boolean;
    top?: number;
    left?: number;
}

export const useStyles = makeStyles<Theme, IStyleProps>((theme: Theme) => ({
    '@keyframes pulse': {
        '0%': {
            opacity: 0.6,
        },
        '50%': {
            opacity: 0.2,
        },
        '100%': {
            opacity: 0.6,
        }
    },
    root: {
        position: 'relative',
        display: props => props.inline ? 'inline-block' : 'block',
        height: props => props.height
            ? !isNaN(props.height as any) 
                ? `${props.height}px`
                : props.height
            : '18px',
        width: props => props.width
            ? !isNaN(props.width as any) 
                ? `${props.width}px`
                : props.width
            : '18px',
        top: props => `${props.top}px`,
        left: props => `${props.left}px`,
        backgroundColor: theme.palette.primary.dark,
        borderRadius: '4px',
        animation: '$pulse 1.5s ease-in-out 0.5s infinite',
    },
}));
