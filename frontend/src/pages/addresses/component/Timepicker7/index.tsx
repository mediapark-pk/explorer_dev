import React from 'react';
import { useStyles } from 'src/pages/addresses/component/Timepicker7/style';
import Typography from '@material-ui/core/Typography';

interface ITimepicker7Props {
}

const Timepicker7: React.FC<ITimepicker7Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Typography className={classes.typography} >
                    Aug 18
                </Typography>
            </div>
            <div className={classes.div1} >
                <div className={classes.ellipse} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjMyMTUgMTJDMjMuMzIxNSAxOC4zNTQ4IDE4LjIwOTIgMjMuNSAxMS45MTA4IDIzLjVDNS42MTIyOCAyMy41IDAuNSAxOC4zNTQ4IDAuNSAxMkMwLjUgNS42NDUyIDUuNjEyMjggMC41IDExLjkxMDggMC41QzE4LjIwOTIgMC41IDIzLjMyMTUgNS42NDUyIDIzLjMyMTUgMTJaIiBmaWxsPSIjMjAyOTQwIiBzdHJva2U9IiMzRDkwRTMiLz4KPC9zdmc+Cg=='/>
                </div>
                <div className={classes.ellipse} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjg5NiAxNy41TDE4Ljg1ODggMTIuNUwxMy44OTYgNy41VjE3LjVaIiBmaWxsPSIjM0Q5MEUzIi8+CjxwYXRoIGQ9Ik05LjkyNTc4IDcuNUw0Ljk2Mjk3IDEyLjVMOS45MjU3OCAxNy41TDkuOTI1NzggNy41WiIgZmlsbD0iIzNEOTBFMyIvPgo8L3N2Zz4K'/>
                </div>
                <div className={classes.vector21} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMSIgaGVpZ2h0PSI0MSIgdmlld0JveD0iMCAwIDEgNDEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjUgMFY0MSIgc3Ryb2tlPSIjM0Q5MEUzIi8+Cjwvc3ZnPgo='/>
                </div>
            </div>
        </div>
    );
};

export default Timepicker7;



