import React from 'react';
import { useStyles } from 'src/pages/block/component/Volume1/style';
import Typography from '@material-ui/core/Typography';

interface IVolume1Props {
    volume?: number;
}

const Volume1: React.FC<IVolume1Props> = ({ volume, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Typography className={classes.typography} >
                    Volume
                </Typography>
            </div>
            <div className={classes.div1} >
                <Typography
                    className={classes.typography1}
                >
                    { volume }
                </Typography>
                <Typography
                    className={classes.typography2}
                >
                    { volume }
                </Typography>
            </div>
        </div>
    );
};

export default Volume1;



