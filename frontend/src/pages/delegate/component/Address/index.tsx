import React from 'react';
import { useStyles } from 'src/pages/delegate/component/Address/style';
import Sender from 'src/pages/delegate/component/Sender';
import Group from '@material-ui/icons/Group';

interface IAddressProps {
    SenderId?: number;
}

const Address: React.FC<IAddressProps> = ({ SenderId, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Sender SenderId={SenderId} />
            <div className={classes.contentCopy24px} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDFINEMyLjkgMSAyIDEuOSAyIDNWMTdINFYzSDE2VjFaTTE5IDVIOEM2LjkgNSA2IDUuOSA2IDdWMjFDNiAyMi4xIDYuOSAyMyA4IDIzSDE5QzIwLjEgMjMgMjEgMjIuMSAyMSAyMVY3QzIxIDUuOSAyMC4xIDUgMTkgNVpNMTkgMjFIOFY3SDE5VjIxWiIgZmlsbD0iIzNEOTBFMyIvPgo8L3N2Zz4K'/>
            </div>
            <Group className={classes.group} />
        </div>
    );
};

export default Address;



