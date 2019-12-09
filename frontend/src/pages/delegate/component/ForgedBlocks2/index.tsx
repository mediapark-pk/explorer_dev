import React from 'react';
import { useStyles } from 'src/pages/delegate/component/ForgedBlocks2/style';
import Typography from '@material-ui/core/Typography';

interface IForgedBlocks2Props {
    fee?: string;
}

const ForgedBlocks2: React.FC<IForgedBlocks2Props> = ({ fee, }) => {
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

export default ForgedBlocks2;



