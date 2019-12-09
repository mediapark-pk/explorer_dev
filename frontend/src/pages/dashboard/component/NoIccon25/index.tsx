import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/NoIccon25/style';
import Typography from '@material-ui/core/Typography';

interface INoIccon25Props {
}

const NoIccon25: React.FC<INoIccon25Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                view all delegates
            </Typography>
        </div>
    );
};

export default NoIccon25;



