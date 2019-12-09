import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/TotalSupply1/style';
import Typography from '@material-ui/core/Typography';

interface ITotalSupply1Props {
    totalsupply?: string;
}

const TotalSupply1: React.FC<ITotalSupply1Props> = ({ totalsupply, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Total Supply:
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { totalsupply }
            </Typography>
        </div>
    );
};

export default TotalSupply1;



