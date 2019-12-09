import React from 'react';
import { useStyles } from 'src/pages/addresses/component/Uprime2/style';
import Typography from '@material-ui/core/Typography';

interface IUprime2Props {
}

const Uprime2: React.FC<IUprime2Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Typography className={classes.typography} >
                    Public Key
                </Typography>
            </div>
            <div className={classes.div1} >
                <Typography className={classes.typography1} >
                    2108f96093f371009dfe3bb0704b8b57037c0f4104caac86024fcf215f0b6535
                </Typography>
                <div className={classes.contentCopy24px} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDFINEMyLjkgMSAyIDEuOSAyIDNWMTdINFYzSDE2VjFaTTE5IDVIOEM2LjkgNSA2IDUuOSA2IDdWMjFDNiAyMi4xIDYuOSAyMyA4IDIzSDE5QzIwLjEgMjMgMjEgMjIuMSAyMSAyMVY3QzIxIDUuOSAyMC4xIDUgMTkgNVpNMTkgMjFIOFY3SDE5VjIxWiIgZmlsbD0iIzNEOTBFMyIvPgo8L3N2Zz4K'/>
                </div>
            </div>
        </div>
    );
};

export default Uprime2;



