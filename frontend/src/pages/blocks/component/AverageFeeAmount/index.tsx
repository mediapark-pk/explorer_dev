import React from 'react';
import { useStyles } from 'src/pages/blocks/component/AverageFeeAmount/style';
import Typography from '@material-ui/core/Typography';

interface IAverageFeeAmountProps {
}

const AverageFeeAmount: React.FC<IAverageFeeAmountProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Average fee amount
            </Typography>
            <Typography className={classes.typography1} >
                0.2414 DDK
            </Typography>
        </div>
    );
};

export default AverageFeeAmount;



