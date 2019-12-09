import React from 'react';
import { useStyles } from 'src/pages/transactions/component/SendsToday/style';
import Typography from '@material-ui/core/Typography';

interface ISendsTodayProps {
}

const SendsToday: React.FC<ISendsTodayProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Sends today
            </Typography>
            <Typography className={classes.typography1} >
                143.231 DDK
            </Typography>
        </div>
    );
};

export default SendsToday;



