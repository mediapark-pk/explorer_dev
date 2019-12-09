import React from 'react';
import { useStyles } from 'src/pages/block/component/DateTime2/style';
import Typography from '@material-ui/core/Typography';

interface IDateTime2Props {
    createdAt?: string;
}

const DateTime2: React.FC<IDateTime2Props> = ({ createdAt, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Date / Time
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { createdAt }
            </Typography>
        </div>
    );
};

export default DateTime2;



