import React from 'react';
import { useStyles } from 'src/pages/delegates/component/StandbyDelegate/style';
import Typography from '@material-ui/core/Typography';

interface IStandbyDelegateProps {
}

const StandbyDelegate: React.FC<IStandbyDelegateProps> = ({ }) => {
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

export default StandbyDelegate;



