import React from 'react';
import { useStyles } from 'src/pages/delegate/component/DDKCoreVersions2/style';
import Typography from '@material-ui/core/Typography';

interface IDDKCoreVersions2Props {
    Amount?: string;
}

const DDKCoreVersions2: React.FC<IDDKCoreVersions2Props> = ({ Amount, }) => {
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

export default DDKCoreVersions2;



