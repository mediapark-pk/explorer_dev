import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/CoinHolders/style';
import Typography from '@material-ui/core/Typography';

interface ICoinHoldersProps {
    Coinholders?: string;
}

const CoinHolders: React.FC<ICoinHoldersProps> = ({ Coinholders, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Coin Holders:
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { Coinholders }
            </Typography>
        </div>
    );
};

export default CoinHolders;



