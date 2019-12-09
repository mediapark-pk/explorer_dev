import React from 'react';
import { useStyles } from 'src/pages/delegates/component/RowsPerPage10/style';
import Typography from '@material-ui/core/Typography';
import DropDown5 from 'src/pages/delegates/component/DropDown5';
import Button from '@material-ui/core/Button';

interface IRowsPerPage10Props {
}

const RowsPerPage10: React.FC<IRowsPerPage10Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Rows per page:
            </Typography>
            <DropDown5 />
            <Typography className={classes.typography1} >
                10 of 500 
            </Typography>
            <Button
                className={classes.button}
                classes={{ root: classes.root1 }}
            >
                <div className={classes.frame} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjQxMDIgNy40MUwxMC44MzAyIDEyTDE1LjQxMDIgMTYuNTlMMTQuMDAwMiAxOEw4LjAwMDE2IDEyTDE0LjAwMDIgNkwxNS40MTAyIDcuNDFaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K'/>
                </div>
            </Button>
            <Button
                className={classes.button1}
                classes={{ root: classes.root2 }}
            >
                <div className={classes.frame1} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNTg5ODQgMTYuNTlMMTMuMTY5OCAxMkw4LjU4OTg0IDcuNDFMOS45OTk4NCA2TDE1Ljk5OTggMTJMOS45OTk4NCAxOEw4LjU4OTg0IDE2LjU5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=='/>
                </div>
            </Button>
        </div>
    );
};

export default RowsPerPage10;



