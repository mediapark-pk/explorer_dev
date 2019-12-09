import React from 'react';
import { useStyles } from 'src/pages/delegates/component/ActiveDalegates/style';
import Typography from '@material-ui/core/Typography';

interface IActiveDalegatesProps {
}

const ActiveDalegates: React.FC<IActiveDalegatesProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Active dalegates
            </Typography>
            <Typography className={classes.typography1} >
                124
            </Typography>
        </div>
    );
};

export default ActiveDalegates;



