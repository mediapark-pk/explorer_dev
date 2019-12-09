import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/TotalStakeholders1/style';
import Typography from '@material-ui/core/Typography';

interface ITotalStakeholders1Props {
    totalstakeholders?: string;
}

const TotalStakeholders1: React.FC<ITotalStakeholders1Props> = ({ totalstakeholders, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Total Stakeholders:
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { totalstakeholders }
            </Typography>
        </div>
    );
};

export default TotalStakeholders1;



