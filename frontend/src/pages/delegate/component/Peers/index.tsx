import React from 'react';
import { useStyles } from 'src/pages/delegate/component/Peers/style';
import Typography from '@material-ui/core/Typography';

interface IPeersProps {
    Amount?: string;
}

const Peers: React.FC<IPeersProps> = ({ Amount, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Peers
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { Amount }
            </Typography>
        </div>
    );
};

export default Peers;



