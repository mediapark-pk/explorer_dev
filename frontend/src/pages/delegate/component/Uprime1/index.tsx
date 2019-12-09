import React from 'react';
import { useStyles } from 'src/pages/delegate/component/Uprime1/style';
import Typography from '@material-ui/core/Typography';

interface IUprime1Props {
    TrnType?: string;
}

const Uprime1: React.FC<IUprime1Props> = ({ TrnType, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Uptime
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { TrnType }
            </Typography>
        </div>
    );
};

export default Uprime1;



