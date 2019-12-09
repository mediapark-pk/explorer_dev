import React from 'react';
import { useStyles } from 'src/pages/delegate/component/TotalVotes2/style';
import Typography from '@material-ui/core/Typography';

interface ITotalVotes2Props {
    fee?: string;
}

const TotalVotes2: React.FC<ITotalVotes2Props> = ({ fee, }) => {
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

export default TotalVotes2;



