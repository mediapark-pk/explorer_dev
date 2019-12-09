import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/ButtonGroup1/style';
import Typography from '@material-ui/core/Typography';

interface IButtonGroup1Props {
}

const ButtonGroup1: React.FC<IButtonGroup1Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                All filters
            </Typography>
            <div className={classes.custom1583557} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTBMMTIgMTVMMTcgMTBIN1oiIGZpbGw9IiMzRDkwRTMiLz4KPC9zdmc+Cg=='/>
            </div>
        </div>
    );
};

export default ButtonGroup1;



