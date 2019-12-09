import React from 'react';
import { useStyles } from 'src/pages/delegate/component/ForgedBlocks/style';
import Typography from '@material-ui/core/Typography';

interface IForgedBlocksProps {
    fee?: string;
}

const ForgedBlocks: React.FC<IForgedBlocksProps> = ({ fee, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Forged blocks
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { fee }
            </Typography>
        </div>
    );
};

export default ForgedBlocks;



