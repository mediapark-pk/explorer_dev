import React from 'react';
import { useStyles } from 'src/pages/transaction/component/Type/style';
import Typography from '@material-ui/core/Typography';

interface ITypeProps {
    TrnType?: string;
}

const Type: React.FC<ITypeProps> = ({ TrnType, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Type
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { TrnType }
            </Typography>
        </div>
    );
};

export default Type;



