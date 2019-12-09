import React from 'react';
import { useStyles } from 'src/pages/transactions/component/AverageTxnPerDay/style';
import Typography from '@material-ui/core/Typography';

interface IAverageTxnPerDayProps {
}

const AverageTxnPerDay: React.FC<IAverageTxnPerDayProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Average txn per day
            </Typography>
            <Typography className={classes.typography1} >
                143.231 DDK
            </Typography>
        </div>
    );
};

export default AverageTxnPerDay;



