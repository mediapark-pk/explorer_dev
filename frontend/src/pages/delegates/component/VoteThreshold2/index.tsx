import React from 'react';
import { useStyles } from 'src/pages/delegates/component/VoteThreshold2/style';
import Typography from '@material-ui/core/Typography';

interface IVoteThreshold2Props {
}

const VoteThreshold2: React.FC<IVoteThreshold2Props> = ({ }) => {
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

export default VoteThreshold2;



