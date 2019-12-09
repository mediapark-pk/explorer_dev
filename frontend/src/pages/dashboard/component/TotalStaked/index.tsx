import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/TotalStaked/style';
import Typography from '@material-ui/core/Typography';

interface ITotalStakedProps {
    Totalstaked?: string;
}

const TotalStaked: React.FC<ITotalStakedProps> = ({ Totalstaked, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Total staked:
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { Totalstaked }
            </Typography>
            <Typography className={classes.typography2} >
                DDK
            </Typography>
        </div>
    );
};

export default TotalStaked;



