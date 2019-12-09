import React from 'react';
import { useStyles } from 'src/pages/addresses/component/MissedBlocks5/style';
import Typography from '@material-ui/core/Typography';

interface IMissedBlocks5Props {
    TrnType?: number;
}

const MissedBlocks5: React.FC<IMissedBlocks5Props> = ({ TrnType, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Typography className={classes.typography} >
                    Total Stake Reward
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

export default MissedBlocks5;



