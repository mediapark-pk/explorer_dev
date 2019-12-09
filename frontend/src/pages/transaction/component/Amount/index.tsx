import React from 'react';
import { useStyles } from 'src/pages/transaction/component/Amount/style';
import Typography from '@material-ui/core/Typography';

interface IAmountProps {
    Amount?: number;
}

const Amount: React.FC<IAmountProps> = ({ Amount, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Typography className={classes.typography} >
                    Amount
                </Typography>
            </div>
            <div className={classes.div1} >
                <Typography
                    className={classes.typography1}
                >
                    { Amount }
                </Typography>
                <Typography className={classes.typography2} >
                    DDK
                </Typography>
            </div>
        </div>
    );
};

export default Amount;



