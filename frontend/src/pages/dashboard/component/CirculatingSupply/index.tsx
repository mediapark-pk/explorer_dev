import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/CirculatingSupply/style';
import Typography from '@material-ui/core/Typography';

interface ICirculatingSupplyProps {
    Circulatingsupply?: string;
}

const CirculatingSupply: React.FC<ICirculatingSupplyProps> = ({ Circulatingsupply, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Circulating Supply:
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { Circulatingsupply }
            </Typography>
            <Typography className={classes.typography2} >
                DDK
            </Typography>
        </div>
    );
};

export default CirculatingSupply;



