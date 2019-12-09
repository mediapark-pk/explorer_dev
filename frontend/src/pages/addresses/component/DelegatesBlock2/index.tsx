import React from 'react';
import { useStyles } from 'src/pages/addresses/component/DelegatesBlock2/style';
import Typography from '@material-ui/core/Typography';

interface IDelegatesBlock2Props {
}

const DelegatesBlock2: React.FC<IDelegatesBlock2Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.custom25122627} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI3IDI4TDQzIDE5IiBzdHJva2U9IiMzRDkwRTMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjMgMjFMMzkgMTIiIHN0cm9rZT0iIzNEOTBFMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNyAxOEwzMyA5IiBzdHJva2U9IiMzRDkwRTMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTEgMTVMMjcgNiIgc3Ryb2tlPSIjM0Q5MEUzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTI3IDM0TDQzIDI1IiBzdHJva2U9IiMzRDkwRTMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjcgNDBMNDMgMzEiIHN0cm9rZT0iIzNEOTBFMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMiAyOEw2IDE5IiBzdHJva2U9IiMzRDkwRTMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjIgMzRMNiAyNSIgc3Ryb2tlPSIjM0Q5MEUzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTIyIDQwTDYgMzEiIHN0cm9rZT0iIzNEOTBFMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo='/>
            </div>
            <Typography className={classes.typography} >
                Transactions
            </Typography>
            <Typography className={classes.typography1} >
                (6)
            </Typography>
        </div>
    );
};

export default DelegatesBlock2;



