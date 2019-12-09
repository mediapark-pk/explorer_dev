import React from 'react';
import { useStyles } from 'src/pages/transactions/component/GraphInfo1/style';
import Typography from '@material-ui/core/Typography';

interface IGraphInfo1Props {
}

const GraphInfo1: React.FC<IGraphInfo1Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Peak transaction 1 349 890 on January 4, 2018
            </Typography>
            <Typography className={classes.typography1} >
                Low transaction 1 349 890 on January 4, 2018
            </Typography>
            <div className={classes.custom1832266} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMTdWMjBDMiAyMS4xMDQ2IDIuODk1NDMgMjIgNCAyMkgyMEMyMS4xMDQ2IDIyIDIyIDIxLjEwNDYgMjIgMjBWMTciIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjU0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzIDJDMTMgMS40NDc3MiAxMi41NTIzIDEgMTIgMUMxMS40NDc3IDEgMTEgMS40NDc3MiAxMSAyVjEyLjA4NThMNy43MDcxMSA4Ljc5Mjg5QzcuMzE2NTggOC40MDIzNyA2LjY4MzQyIDguNDAyMzcgNi4yOTI4OSA4Ljc5Mjg5QzUuOTAyMzcgOS4xODM0MiA1LjkwMjM3IDkuODE2NTggNi4yOTI4OSAxMC4yMDcxTDExLjI5MjkgMTUuMjA3MUwxMiAxNS45MTQyTDEyLjcwNzEgMTUuMjA3MUwxNy43MDcxIDEwLjIwNzFDMTguMDk3NiA5LjgxNjU4IDE4LjA5NzYgOS4xODM0MiAxNy43MDcxIDguNzkyODlDMTcuMzE2NiA4LjQwMjM3IDE2LjY4MzQgOC40MDIzNyAxNi4yOTI5IDguNzkyODlMMTMgMTIuMDg1OFYyWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41NCIvPgo8L3N2Zz4K'/>
            </div>
        </div>
    );
};

export default GraphInfo1;



