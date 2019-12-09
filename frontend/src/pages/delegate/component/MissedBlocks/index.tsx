import React from 'react';
import { useStyles } from 'src/pages/delegate/component/MissedBlocks/style';
import Typography from '@material-ui/core/Typography';

interface IMissedBlocksProps {
    fee?: string;
}

const MissedBlocks: React.FC<IMissedBlocksProps> = ({ fee, }) => {
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

export default MissedBlocks;



