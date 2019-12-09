import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/NoIccon26/style';
import Typography from '@material-ui/core/Typography';

interface INoIccon26Props {
}

const NoIccon26: React.FC<INoIccon26Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                view all bloks
            </Typography>
        </div>
    );
};

export default NoIccon26;



