import React from 'react';
import { useStyles } from 'src/pages/block/component/BlockId/style';
import Typography from '@material-ui/core/Typography';

interface IBlockIdProps {
    blockId?: number;
}

const BlockId: React.FC<IBlockIdProps> = ({ blockId, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Typography className={classes.typography} >
                    Block ID
                </Typography>
            </div>
            <div className={classes.div1} >
                <Typography
                    className={classes.typography1}
                >
                    { blockId }
                </Typography>
                <div className={classes.contentCopy24px} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDFINEMyLjkgMSAyIDEuOSAyIDNWMTdINFYzSDE2VjFaTTE5IDVIOEM2LjkgNSA2IDUuOSA2IDdWMjFDNiAyMi4xIDYuOSAyMyA4IDIzSDE5QzIwLjEgMjMgMjEgMjIuMSAyMSAyMVY3QzIxIDUuOSAyMC4xIDUgMTkgNVpNMTkgMjFIOFY3SDE5VjIxWiIgZmlsbD0iIzNEOTBFMyIvPgo8L3N2Zz4K'/>
                </div>
            </div>
        </div>
    );
};

export default BlockId;



