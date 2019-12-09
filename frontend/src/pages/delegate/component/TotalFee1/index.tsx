import React from 'react';
import { useStyles } from 'src/pages/delegate/component/TotalFee1/style';
import Typography from '@material-ui/core/Typography';

interface ITotalFee1Props {
    TrnType?: number;
}

const TotalFee1: React.FC<ITotalFee1Props> = ({ TrnType, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Typography className={classes.typography} >
                    Total Fee reward
                </Typography>
            </div>
            <div className={classes.div1} >
                <Typography
                    className={classes.typography1}
                >
                    { TrnType }
                </Typography>
                <Typography
                    className={classes.typography2}
                >
                    { TrnType }
                </Typography>
            </div>
        </div>
    );
};

export default TotalFee1;



