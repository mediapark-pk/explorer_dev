import React from 'react';
import { useStyles } from 'src/pages/transactions/component/TotalTxnNumber/style';
import Typography from '@material-ui/core/Typography';

interface ITotalTxnNumberProps {
    Blockheight?: string;
}

const TotalTxnNumber: React.FC<ITotalTxnNumberProps> = ({ Blockheight, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Total txn number
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { Blockheight }
            </Typography>
        </div>
    );
};

export default TotalTxnNumber;



