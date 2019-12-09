import React from 'react';
import { useStyles } from 'src/pages/delegate/component/BackButton1/style';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface IBackButton1Props {
}

const BackButton1: React.FC<IBackButton1Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Button
                className={classes.button}
                classes={{ root: classes.root1 }}
            >
                <div className={classes.custom2513091} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjQxMDIgNy4zMTUzN0wxMC44MzAyIDExLjg0NjlMMTUuNDEwMiAxNi4zNzg1TDE0LjAwMDIgMTcuNzcwNUw4LjAwMDE2IDExLjg0NjlMMTQuMDAwMiA1LjkyMzMzTDE1LjQxMDIgNy4zMTUzN1oiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4K'/>
                </div>
                <Typography className={classes.typography} >
                    Back
                </Typography>
            </Button>
        </div>
    );
};

export default BackButton1;



