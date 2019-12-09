import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/NoIccon27/style';
import Typography from '@material-ui/core/Typography';

interface INoIccon27Props {
}

const NoIccon27: React.FC<INoIccon27Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                view all transactions
            </Typography>
        </div>
    );
};

export default NoIccon27;



