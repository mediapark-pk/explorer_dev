import React from 'react';
import { useStyles } from 'src/pages/blocks/component/AverageBlockTime/style';
import Typography from '@material-ui/core/Typography';

interface IAverageBlockTimeProps {
}

const AverageBlockTime: React.FC<IAverageBlockTimeProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Average block time
            </Typography>
            <Typography className={classes.typography1} >
                10 sec
            </Typography>
        </div>
    );
};

export default AverageBlockTime;



