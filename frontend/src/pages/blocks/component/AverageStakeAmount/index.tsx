import React from 'react';
import { useStyles } from 'src/pages/blocks/component/AverageStakeAmount/style';
import Typography from '@material-ui/core/Typography';

interface IAverageStakeAmountProps {
}

const AverageStakeAmount: React.FC<IAverageStakeAmountProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Average stake amount
            </Typography>
            <Typography className={classes.typography1} >
                195 012 DDK
            </Typography>
        </div>
    );
};

export default AverageStakeAmount;



