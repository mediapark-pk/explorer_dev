import React from 'react';
import { useStyles } from 'src/pages/addresses/component/TotalFee3/style';
import Typography from '@material-ui/core/Typography';

interface ITotalFee3Props {
    TrnType?: number;
}

const TotalFee3: React.FC<ITotalFee3Props> = ({ TrnType, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Typography className={classes.typography} >
                    Total Group
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

export default TotalFee3;



