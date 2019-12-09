import React from 'react';
import { useStyles } from 'src/pages/delegates/component/StandbyDelegate2/style';
import Typography from '@material-ui/core/Typography';

interface IStandbyDelegate2Props {
}

const StandbyDelegate2: React.FC<IStandbyDelegate2Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Standby Delegate
            </Typography>
            <Typography className={classes.typography1} >
                124
            </Typography>
        </div>
    );
};

export default StandbyDelegate2;



