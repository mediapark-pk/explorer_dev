import React from 'react';
import { useStyles } from 'src/pages/delegate/component/DDKCoreVersions/style';
import Typography from '@material-ui/core/Typography';

interface IDDKCoreVersionsProps {
    Amount?: string;
}

const DDKCoreVersions: React.FC<IDDKCoreVersionsProps> = ({ Amount, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                DDK Core Versions
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { Amount }
            </Typography>
        </div>
    );
};

export default DDKCoreVersions;



