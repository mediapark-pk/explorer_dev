import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/BlockTitle1/style';
import Typography from '@material-ui/core/Typography';

interface IBlockTitle1Props {
}

const BlockTitle1: React.FC<IBlockTitle1Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.custom1583338} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjgzNSAyNy4zMTc1VjE0SDI3LjE1OTZDMjguMjY5NCAxNCAzMC40ODkgMTQuNjY1OSAzMC40ODkgMTcuMzI5NCIgc3Ryb2tlPSIjM0Q5MEUzIi8+CjxwYXRoIGQ9Ik0zMC40ODkgMTkuNjkyNlYzMC4zNDY3QzMwLjQ4OSAzMS40NTY0IDI5LjgyMzEgMzMuNjc2IDI3LjE1OTYgMzMuNjc2QzI0LjQ5NjEgMzMuNjc2IDIxLjE2NjcgMzMuNjc2IDE5LjgzNSAzMy42NzZWMzAuMzQ2NyIgc3Ryb2tlPSIjM0Q5MEUzIi8+CjxwYXRoIGQ9Ik0yMi4zNDg0IDE4LjUxMDlIMzEuMDA0OEMzMi4zMzY1IDE4LjUxMDkgMzUgMTkuMzEgMzUgMjIuNTA2MkMzNSAyNC4xMDQzIDM1IDI1LjgzNTYgMzUgMjYuNTAxNEMzNSAyNy4zODkzIDM0LjQ2NzMgMjkuMTY0OSAzMi4zMzY1IDI5LjE2NDkiIHN0cm9rZT0iIzNEOTBFMyIvPgo8cGF0aCBkPSJNMjkuMzA2NiAyOS4xNjQ5QzI0LjY0NTUgMjkuMTY0OSAxNS4zMjMyIDI5LjE2NDkgMTUuMzIzMiAyOS4xNjQ5VjE4LjUxMDlDMTYuMjExMSAxOC41MTA5IDE4LjY1MjYgMTguNTEwOSAxOC42NTI2IDE4LjUxMDkiIHN0cm9rZT0iIzNEOTBFMyIvPgo8cGF0aCBkPSJNNiAxNy41QzguNjU0NzcgMTAuMjA3NiAxNS42NDg4IDUgMjMuODU5MSA1QzMyLjA2OTQgNSAzOS4wNjM0IDEwLjIwNzYgNDEuNzE4MSAxNy41TTYgMzAuNUM4LjY1NDc3IDM3Ljc5MjQgMTUuNjQ4OCA0MyAyMy44NTkxIDQzQzMyLjA2OTQgNDMgMzkuMDYzNCAzNy43OTI0IDQxLjcxODEgMzAuNSIgc3Ryb2tlPSIjM0Q5MEUzIi8+CjxwYXRoIGQ9Ik0zOCAzMkw0MiAzMEw0My41IDM0IiBzdHJva2U9IiMzRDkwRTMiLz4KPHBhdGggZD0iTTkuNjc3NjggMTYuNTU5MUw2LjAwMDI0IDE3LjVMNC40MTQ0OSAxNCIgc3Ryb2tlPSIjM0Q5MEUzIi8+Cjwvc3ZnPgo='/>
            </div>
            <Typography className={classes.typography} >
                Convertor
            </Typography>
        </div>
    );
};

export default BlockTitle1;



