import React from 'react';
import { useStyles } from 'src/pages/statistics/component/BackButton2/style';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface IBackButton2Props {
}

const BackButton2: React.FC<IBackButton2Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Button
                className={classes.button}
                classes={{ root: classes.root1 }}
            >
                <div className={classes.custom2516465} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjQxMDIgNy4zMTU2MUwxMC44MzAyIDExLjg0NzJMMTUuNDEwMiAxNi4zNzg3TDE0LjAwMDIgMTcuNzcwOEw4LjAwMDE2IDExLjg0NzJMMTQuMDAwMiA1LjkyMzU3TDE1LjQxMDIgNy4zMTU2MVoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4K'/>
                </div>
                <Typography className={classes.typography} >
                    Back
                </Typography>
            </Button>
        </div>
    );
};

export default BackButton2;



