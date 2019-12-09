import React from 'react';
import { useStyles } from 'src/pages/transactions/component/VotesToday/style';
import Typography from '@material-ui/core/Typography';

interface IVotesTodayProps {
}

const VotesToday: React.FC<IVotesTodayProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Votes today
            </Typography>
            <Typography className={classes.typography1} >
                1.231 DDK
            </Typography>
        </div>
    );
};

export default VotesToday;



