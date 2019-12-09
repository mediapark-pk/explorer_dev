import React from 'react';
import { useStyles } from 'src/pages/delegate/component/ServerLocation/style';
import Typography from '@material-ui/core/Typography';

interface IServerLocationProps {
    Amount?: string;
}

const ServerLocation: React.FC<IServerLocationProps> = ({ Amount, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Server Location
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { Amount }
            </Typography>
        </div>
    );
};

export default ServerLocation;



