import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/BlockLegend/style';
import Legend3 from 'src/pages/dashboard/component/Legend3';
import Legend4 from 'src/pages/dashboard/component/Legend4';
import Legend5 from 'src/pages/dashboard/component/Legend5';

interface IBlockLegendProps {
}

const BlockLegend: React.FC<IBlockLegendProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Legend3 />
            <Legend4 />
            <Legend5 />
            <div className={classes.custom1583722} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMTdWMjBDMiAyMS4xMDQ2IDIuODk1NDMgMjIgNCAyMkgyMEMyMS4xMDQ2IDIyIDIyIDIxLjEwNDYgMjIgMjBWMTciIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjU0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzIDJDMTMgMS40NDc3MiAxMi41NTIzIDEgMTIgMUMxMS40NDc3IDEgMTEgMS40NDc3MiAxMSAyVjEyLjA4NThMNy43MDcxMSA4Ljc5Mjg5QzcuMzE2NTggOC40MDIzNyA2LjY4MzQyIDguNDAyMzcgNi4yOTI4OSA4Ljc5Mjg5QzUuOTAyMzcgOS4xODM0MiA1LjkwMjM3IDkuODE2NTggNi4yOTI4OSAxMC4yMDcxTDExLjI5MjkgMTUuMjA3MUwxMiAxNS45MTQyTDEyLjcwNzEgMTUuMjA3MUwxNy43MDcxIDEwLjIwNzFDMTguMDk3NiA5LjgxNjU4IDE4LjA5NzYgOS4xODM0MiAxNy43MDcxIDguNzkyODlDMTcuMzE2NiA4LjQwMjM3IDE2LjY4MzQgOC40MDIzNyAxNi4yOTI5IDguNzkyODlMMTMgMTIuMDg1OFYyWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41NCIvPgo8L3N2Zz4K'/>
            </div>
        </div>
    );
};

export default BlockLegend;



