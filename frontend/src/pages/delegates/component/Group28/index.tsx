import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group28/style';
import Typography from '@material-ui/core/Typography';

interface IGroup28Props {
}

const Group28: React.FC<IGroup28Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                1
            </Typography>
        </div>
    );
};

export default Group28;



