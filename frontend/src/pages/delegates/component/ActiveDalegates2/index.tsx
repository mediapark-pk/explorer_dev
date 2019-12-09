import React from 'react';
import { useStyles } from 'src/pages/delegates/component/ActiveDalegates2/style';
import Typography from '@material-ui/core/Typography';

interface IActiveDalegates2Props {
}

const ActiveDalegates2: React.FC<IActiveDalegates2Props> = ({ }) => {
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

export default ActiveDalegates2;



