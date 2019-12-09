import React from 'react';
import { useStyles } from 'src/pages/transaction/component/Volume/style';
import Typography from '@material-ui/core/Typography';

interface IVolumeProps {
    dateTime?: string;
}

const Volume: React.FC<IVolumeProps> = ({ dateTime, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Date / Time 
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { dateTime }
            </Typography>
        </div>
    );
};

export default Volume;



