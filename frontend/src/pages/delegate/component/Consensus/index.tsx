import React from 'react';
import { useStyles } from 'src/pages/delegate/component/Consensus/style';
import Typography from '@material-ui/core/Typography';

interface IConsensusProps {
    Amount?: string;
}

const Consensus: React.FC<IConsensusProps> = ({ Amount, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Consensus
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { Amount }
            </Typography>
        </div>
    );
};

export default Consensus;



