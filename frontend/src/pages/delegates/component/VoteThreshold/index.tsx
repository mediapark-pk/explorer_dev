import React from 'react';
import { useStyles } from 'src/pages/delegates/component/VoteThreshold/style';
import Typography from '@material-ui/core/Typography';

interface IVoteThresholdProps {
}

const VoteThreshold: React.FC<IVoteThresholdProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Vote threshold
            </Typography>
            <Typography className={classes.typography1} >
                178
            </Typography>
        </div>
    );
};

export default VoteThreshold;



