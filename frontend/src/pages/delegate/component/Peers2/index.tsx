import React from 'react';
import { useStyles } from 'src/pages/delegate/component/Peers2/style';
import Typography from '@material-ui/core/Typography';

interface IPeers2Props {
    Amount?: string;
}

const Peers2: React.FC<IPeers2Props> = ({ Amount, }) => {
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

export default Peers2;



