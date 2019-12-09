import React from 'react';
import { useStyles } from 'src/pages/transaction/component/DateTime/style';
import Typography from '@material-ui/core/Typography';

interface IDateTimeProps {
    recipient?: number;
}

const DateTime: React.FC<IDateTimeProps> = ({ recipient, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Recipient
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { recipient }
            </Typography>
        </div>
    );
};

export default DateTime;



