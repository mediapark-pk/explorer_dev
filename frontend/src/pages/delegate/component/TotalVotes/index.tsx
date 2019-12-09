import React from 'react';
import { useStyles } from 'src/pages/delegate/component/TotalVotes/style';
import Typography from '@material-ui/core/Typography';

interface ITotalVotesProps {
    fee?: string;
}

const TotalVotes: React.FC<ITotalVotesProps> = ({ fee, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Total votes
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { fee }
            </Typography>
        </div>
    );
};

export default TotalVotes;



