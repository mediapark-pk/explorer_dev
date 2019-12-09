import React from 'react';
import { useStyles } from 'src/pages/transactions/component/AverageTxnPerBlock/style';
import Typography from '@material-ui/core/Typography';

interface IAverageTxnPerBlockProps {
}

const AverageTxnPerBlock: React.FC<IAverageTxnPerBlockProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Average txn per block
            </Typography>
            <Typography className={classes.typography1} >
                1.231 DDK
            </Typography>
        </div>
    );
};

export default AverageTxnPerBlock;



