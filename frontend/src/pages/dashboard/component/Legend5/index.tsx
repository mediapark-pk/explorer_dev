import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/Legend5/style';
import Typography from '@material-ui/core/Typography';

interface ILegend5Props {
}

const Legend5: React.FC<ILegend5Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.custom1583742} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjA1NjYyIDMuMTI1SDE5LjIxNUMyMC4zMjc0IDMuMTI1IDIxLjIzNzYgNC4wNjI1IDIxLjIzNzYgNS4yMDgzNFYxOS43OTE3QzIxLjIzNzYgMjAuOTM3NSAyMC4zMjc0IDIxLjg3NSAxOS4yMTUgMjEuODc1SDUuMDU2NjJDMy45NDQxOCAyMS44NzUgMy4wMzQgMjAuOTM3NSAzLjAzNCAxOS43OTE3VjUuMjA4MzRDMy4wMzQgNC4wNjI1IDMuOTQ0MTggMy4xMjUgNS4wNTY2MiAzLjEyNVpNMTkuMjE1IDE5Ljc5MTdWNS4yMDgzNEg1LjA1NjYyVjE5Ljc5MTdIMTkuMjE1WiIgZmlsbD0iIzRCRDE4MyIvPgo8L3N2Zz4K'/>
            </div>
            <Typography className={classes.typography} >
                USD
            </Typography>
        </div>
    );
};

export default Legend5;



