import React from 'react';
import { useStyles } from 'src/pages/transactions/component/TotalTxnVolume/style';
import Typography from '@material-ui/core/Typography';

interface ITotalTxnVolumeProps {
}

const TotalTxnVolume: React.FC<ITotalTxnVolumeProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Total txn volume
            </Typography>
            <Typography className={classes.typography1} >
                139 523 DDK
            </Typography>
        </div>
    );
};

export default TotalTxnVolume;



