import React from 'react';
import { useStyles } from 'src/pages/transactions/component/DropDown7/style';
import Typography from '@material-ui/core/Typography';

interface IDropDown7Props {
}

const DropDown7: React.FC<IDropDown7Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                10
            </Typography>
            <div className={classes.custom1832220} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTBMMTIgMTVMMTcgMTBIN1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo='/>
            </div>
        </div>
    );
};

export default DropDown7;



