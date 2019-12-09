import React from 'react';
import { useStyles } from 'src/pages/transaction/component/Fee/style';
import Typography from '@material-ui/core/Typography';

interface IFeeProps {
    fee?: string;
}

const Fee: React.FC<IFeeProps> = ({ fee, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Typography className={classes.typography} >
                    Fee
                </Typography>
            </div>
            <div className={classes.div1} >
                <Typography
                    className={classes.typography1}
                >
                    { fee }
                </Typography>
                <Typography className={classes.typography2} >
                    DDK
                </Typography>
            </div>
        </div>
    );
};

export default Fee;



