import React from 'react';
import { useStyles } from 'src/pages/addresses/component/Consensus4/style';
import Typography from '@material-ui/core/Typography';

interface IConsensus4Props {
    Amount?: string;
}

const Consensus4: React.FC<IConsensus4Props> = ({ Amount, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Last txn
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { Amount }
            </Typography>
        </div>
    );
};

export default Consensus4;



