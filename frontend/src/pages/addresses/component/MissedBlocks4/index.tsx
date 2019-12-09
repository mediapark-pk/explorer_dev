import React from 'react';
import { useStyles } from 'src/pages/addresses/component/MissedBlocks4/style';
import Typography from '@material-ui/core/Typography';

interface IMissedBlocks4Props {
    TrnType?: number;
}

const MissedBlocks4: React.FC<IMissedBlocks4Props> = ({ TrnType, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Typography className={classes.typography} >
                     Total Stake
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

export default MissedBlocks4;



