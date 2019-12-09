import React from 'react';
import { useStyles } from 'src/pages/block/component/ForgedBy/style';
import Typography from '@material-ui/core/Typography';

interface IForgedByProps {
    generatorName?: string;
}

const ForgedBy: React.FC<IForgedByProps> = ({ generatorName, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Forged by
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { generatorName }
            </Typography>
        </div>
    );
};

export default ForgedBy;



