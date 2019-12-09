import React from 'react';
import { useStyles } from 'src/pages/delegates/component/VoteFreeztime/style';
import Typography from '@material-ui/core/Typography';

interface IVoteFreeztimeProps {
}

const VoteFreeztime: React.FC<IVoteFreeztimeProps> = ({ }) => {
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

export default VoteFreeztime;



