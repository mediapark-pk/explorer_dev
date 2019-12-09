import React from 'react';
import { useStyles } from 'src/pages/delegates/component/VoteFreeztime2/style';
import Typography from '@material-ui/core/Typography';

interface IVoteFreeztime2Props {
}

const VoteFreeztime2: React.FC<IVoteFreeztime2Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Vote freeztime
            </Typography>
            <Typography className={classes.typography1} >
                7 days
            </Typography>
        </div>
    );
};

export default VoteFreeztime2;



