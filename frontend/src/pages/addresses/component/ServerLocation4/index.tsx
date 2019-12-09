import React from 'react';
import { useStyles } from 'src/pages/addresses/component/ServerLocation4/style';
import Typography from '@material-ui/core/Typography';

interface IServerLocation4Props {
    Amount?: string;
}

const ServerLocation4: React.FC<IServerLocation4Props> = ({ Amount, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Precentage
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { Amount }
            </Typography>
        </div>
    );
};

export default ServerLocation4;



