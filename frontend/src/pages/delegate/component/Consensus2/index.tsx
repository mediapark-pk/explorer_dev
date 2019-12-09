import React from 'react';
import { useStyles } from 'src/pages/delegate/component/Consensus2/style';
import Typography from '@material-ui/core/Typography';

interface IConsensus2Props {
    Amount?: string;
}

const Consensus2: React.FC<IConsensus2Props> = ({ Amount, }) => {
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

export default Consensus2;



