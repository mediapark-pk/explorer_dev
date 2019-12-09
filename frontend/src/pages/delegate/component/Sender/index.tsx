import React from 'react';
import { useStyles } from 'src/pages/delegate/component/Sender/style';
import Typography from '@material-ui/core/Typography';

interface ISenderProps {
    SenderId?: number;
}

const Sender: React.FC<ISenderProps> = ({ SenderId, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Address
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { SenderId }
            </Typography>
        </div>
    );
};

export default Sender;



