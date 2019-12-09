import React from 'react';
import { useStyles } from 'src/pages/addresses/component/ForgedBlocks5/style';
import Typography from '@material-ui/core/Typography';

interface IForgedBlocks5Props {
    TrnType?: number;
}

const ForgedBlocks5: React.FC<IForgedBlocks5Props> = ({ TrnType, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Typography className={classes.typography} >
                    Total Airdrop Reward
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

export default ForgedBlocks5;



