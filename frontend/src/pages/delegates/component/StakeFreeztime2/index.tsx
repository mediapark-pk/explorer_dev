import React from 'react';
import { useStyles } from 'src/pages/delegates/component/StakeFreeztime2/style';
import Typography from '@material-ui/core/Typography';

interface IStakeFreeztime2Props {
}

const StakeFreeztime2: React.FC<IStakeFreeztime2Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Stake freeztime
            </Typography>
            <Typography className={classes.typography1} >
                24 weeks
            </Typography>
        </div>
    );
};

export default StakeFreeztime2;



