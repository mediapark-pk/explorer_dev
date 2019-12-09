import React from 'react';
import { useStyles } from 'src/pages/delegate/component/MissedBlocks2/style';
import Typography from '@material-ui/core/Typography';

interface IMissedBlocks2Props {
    fee?: string;
}

const MissedBlocks2: React.FC<IMissedBlocks2Props> = ({ fee, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Missed blocks
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { fee }
            </Typography>
        </div>
    );
};

export default MissedBlocks2;



