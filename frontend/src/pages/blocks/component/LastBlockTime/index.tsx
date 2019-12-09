import React from 'react';
import { useStyles } from 'src/pages/blocks/component/LastBlockTime/style';
import Typography from '@material-ui/core/Typography';

interface ILastBlockTimeProps {
}

const LastBlockTime: React.FC<ILastBlockTimeProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Last block time
            </Typography>
            <Typography className={classes.typography1} >
                6 sec
            </Typography>
        </div>
    );
};

export default LastBlockTime;



