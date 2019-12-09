import React from 'react';
import { useStyles } from 'src/pages/delegate/component/ServerLocation2/style';
import Typography from '@material-ui/core/Typography';

interface IServerLocation2Props {
    Amount?: string;
}

const ServerLocation2: React.FC<IServerLocation2Props> = ({ Amount, }) => {
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

export default ServerLocation2;



