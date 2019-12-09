import React from 'react';
import { useStyles } from 'src/pages/statistics/component/Legend2/style';
import Typography from '@material-ui/core/Typography';

interface ILegend2Props {
}

const Legend2: React.FC<ILegend2Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.custom2516457} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjA1NjYyIDMuMTI0OUgxOS4yMTVDMjAuMzI3NCAzLjEyNDkgMjEuMjM3NiA0LjA2MjQgMjEuMjM3NiA1LjIwODIzVjE5Ljc5MTZDMjEuMjM3NiAyMC45Mzc0IDIwLjMyNzQgMjEuODc0OSAxOS4yMTUgMjEuODc0OUg1LjA1NjYyQzMuOTQ0MTggMjEuODc0OSAzLjAzNCAyMC45Mzc0IDMuMDM0IDE5Ljc5MTZWNS4yMDgyM0MzLjAzNCA0LjA2MjQgMy45NDQxOCAzLjEyNDkgNS4wNTY2MiAzLjEyNDlaTTE5LjIxNSAxOS43OTE2VjUuMjA4MjNINS4wNTY2MlYxOS43OTE2SDE5LjIxNVoiIGZpbGw9IiM0QkQxODMiLz4KPC9zdmc+Cg=='/>
            </div>
            <Typography className={classes.typography} >
                USD
            </Typography>
        </div>
    );
};

export default Legend2;



