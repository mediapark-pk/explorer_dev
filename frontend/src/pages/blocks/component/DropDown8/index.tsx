import React from 'react';
import { useStyles } from 'src/pages/blocks/component/DropDown8/style';
import Typography from '@material-ui/core/Typography';

interface IDropDown8Props {
}

const DropDown8: React.FC<IDropDown8Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                10
            </Typography>
            <div className={classes.custom177577} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTBMMTIgMTVMMTcgMTBIN1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo='/>
            </div>
        </div>
    );
};

export default DropDown8;



