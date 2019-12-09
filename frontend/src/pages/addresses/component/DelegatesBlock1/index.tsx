import React from 'react';
import { useStyles } from 'src/pages/addresses/component/DelegatesBlock1/style';
import Typography from '@material-ui/core/Typography';

interface IDelegatesBlock1Props {
}

const DelegatesBlock1: React.FC<IDelegatesBlock1Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.custom25122716} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDMyVjM1QzEyIDM3LjIwOTEgMTMuNzkwOSAzOSAxNiAzOUg0MUM0My4yMDkxIDM5IDQ1IDM3LjIwOTEgNDUgMzVWMTRDNDUgMTEuNzkwOSA0My4yMDkxIDEwIDQxIDEwSDE2QzEzLjc5MDkgMTAgMTIgMTEuNzkwOSAxMiAxNFYxNyIgc3Ryb2tlPSIjM0Q5MEUzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTM1IDI0QzM1IDIxLjc5MDkgMzYuNzkwOSAyMCAzOSAyMEg0NVYzMEgzOUMzNi43OTA5IDMwIDM1IDI4LjIwOTEgMzUgMjZWMjRaIiBzdHJva2U9IiMzRDkwRTMiLz4KPGNpcmNsZSBjeD0iNDAiIGN5PSIyNSIgcj0iMiIgc3Ryb2tlPSIjM0Q5MEUzIi8+CjxwYXRoIGQ9Ik0xOSAyMEw1IDIwTTUgMjBMNy41MTg1MiAyM001IDIwTDcuNTE4NTIgMTciIHN0cm9rZT0iIzNEOTBFMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik04IDI4SDIyTTIyIDI4TDE5LjQ4MTUgMjVNMjIgMjhMMTkuNDgxNSAzMSIgc3Ryb2tlPSIjM0Q5MEUzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg=='/>
            </div>
            <Typography className={classes.typography} >
                Addresses
            </Typography>
            <Typography className={classes.typography1} >
                (8)
            </Typography>
        </div>
    );
};

export default DelegatesBlock1;



