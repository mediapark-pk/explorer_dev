import React from 'react';
import { useStyles } from 'src/pages/transaction/component/Sender3/style';
import Typography from '@material-ui/core/Typography';

interface ISender3Props {
    SenderId?: number;
}

const Sender3: React.FC<ISender3Props> = ({ SenderId, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Typography className={classes.typography} >
                    Sender
                </Typography>
            </div>
            <div className={classes.div1} >
                <Typography
                    className={classes.typography1}
                >
                    { SenderId }
                </Typography>
                <div className={classes.custom1831075} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDFINEMyLjkgMSAyIDEuOSAyIDNWMTdINFYzSDE2VjFaTTE5IDVIOEM2LjkgNSA2IDUuOSA2IDdWMjFDNiAyMi4xIDYuOSAyMyA4IDIzSDE5QzIwLjEgMjMgMjEgMjIuMSAyMSAyMVY3QzIxIDUuOSAyMC4xIDUgMTkgNVpNMTkgMjFIOFY3SDE5VjIxWiIgZmlsbD0iIzNEOTBFMyIvPgo8L3N2Zz4K'/>
                </div>
            </div>
        </div>
    );
};

export default Sender3;



