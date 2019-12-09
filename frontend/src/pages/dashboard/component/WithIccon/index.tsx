import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/WithIccon/style';
import Typography from '@material-ui/core/Typography';

interface IWithIcconProps {
}

const WithIccon: React.FC<IWithIcconProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.custom1583546} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS41MDIgMTRIMTQuNzA4TDE0LjQzMiAxMy43MjZDMTUuNDA3IDEyLjU4OSAxNiAxMS4xMTUgMTYgOS41MDAwM0MxNiA1LjkxMDAzIDEzLjA5IDMuMDAwMDMgOS41IDMuMDAwMDNDNS45MSAzLjAwMDAzIDMgNS45MTAwMyAzIDkuNTAwMDNDMyAxMy4wOSA1LjkxIDE2IDkuNSAxNkMxMS4xMTUgMTYgMTIuNTg4IDE1LjQwOCAxMy43MjUgMTQuNDM0TDE0LjAwMSAxNC43MDhWMTUuNUwxOC45OTkgMjAuNDkxTDIwLjQ5IDE5TDE1LjUwMiAxNFpNOS41IDE0QzcuMDE0IDE0IDUgMTEuOTg2IDUgOS41MDAwM0M1IDcuMDE1MDMgNy4wMTQgNS4wMDAwMyA5LjUgNS4wMDAwM0MxMS45ODUgNS4wMDAwMyAxNCA3LjAxNTAzIDE0IDkuNTAwMDNDMTQgMTEuOTg2IDExLjk4NSAxNCA5LjUgMTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K'/>
            </div>
            <Typography className={classes.typography} >
                Search
            </Typography>
        </div>
    );
};

export default WithIccon;



