import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/MarketCapitalization/style';
import Typography from '@material-ui/core/Typography';

interface IMarketCapitalizationProps {
    MarketCap?: string;
}

const MarketCapitalization: React.FC<IMarketCapitalizationProps> = ({ MarketCap, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Market Capitalization:
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { MarketCap }
            </Typography>
        </div>
    );
};

export default MarketCapitalization;



