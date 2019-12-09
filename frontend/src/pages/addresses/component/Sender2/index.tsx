import React from 'react';
import { useStyles } from 'src/pages/addresses/component/Sender2/style';
import Typography from '@material-ui/core/Typography';

interface ISender2Props {
    Amount?: string;
}

const Sender2: React.FC<ISender2Props> = ({ Amount, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Balance
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { Amount }
            </Typography>
        </div>
    );
};

export default Sender2;



