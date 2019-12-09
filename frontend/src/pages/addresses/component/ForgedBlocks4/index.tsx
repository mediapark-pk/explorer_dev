import React from 'react';
import { useStyles } from 'src/pages/addresses/component/ForgedBlocks4/style';
import Typography from '@material-ui/core/Typography';

interface IForgedBlocks4Props {
    TrnType?: number;
}

const ForgedBlocks4: React.FC<IForgedBlocks4Props> = ({ TrnType, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Typography className={classes.typography} >
                     Total Out
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

export default ForgedBlocks4;



