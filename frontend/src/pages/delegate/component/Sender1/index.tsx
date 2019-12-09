import React from 'react';
import { useStyles } from 'src/pages/delegate/component/Sender1/style';
import Typography from '@material-ui/core/Typography';

interface ISender1Props {
    SenderId?: number;
}

const Sender1: React.FC<ISender1Props> = ({ SenderId, }) => {
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

export default Sender1;



