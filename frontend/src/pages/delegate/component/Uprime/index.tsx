import React from 'react';
import { useStyles } from 'src/pages/delegate/component/Uprime/style';
import Typography from '@material-ui/core/Typography';

interface IUprimeProps {
    TrnType?: string;
}

const Uprime: React.FC<IUprimeProps> = ({ TrnType, }) => {
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

export default Uprime;



