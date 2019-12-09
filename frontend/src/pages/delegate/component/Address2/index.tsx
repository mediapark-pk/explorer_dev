import React from 'react';
import { useStyles } from 'src/pages/delegate/component/Address2/style';
import Sender1 from 'src/pages/delegate/component/Sender1';
import Group from '@material-ui/icons/Group';

interface IAddress2Props {
    SenderId?: number;
}

const Address2: React.FC<IAddress2Props> = ({ SenderId, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Sender1 SenderId={SenderId} />
            <div className={classes.contentCopy24px} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDFINEMyLjkgMSAyIDEuOSAyIDNWMTdINFYzSDE2VjFaTTE5IDVIOEM2LjkgNSA2IDUuOSA2IDdWMjFDNiAyMi4xIDYuOSAyMyA4IDIzSDE5QzIwLjEgMjMgMjEgMjIuMSAyMSAyMVY3QzIxIDUuOSAyMC4xIDUgMTkgNVpNMTkgMjFIOFY3SDE5VjIxWiIgZmlsbD0iIzNEOTBFMyIvPgo8L3N2Zz4K'/>
            </div>
            <Group className={classes.group} />
        </div>
    );
};

export default Address2;



