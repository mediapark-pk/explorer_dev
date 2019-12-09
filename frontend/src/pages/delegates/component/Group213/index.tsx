import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group213/style';
import Typography from '@material-ui/core/Typography';

interface IGroup213Props {
}

const Group213: React.FC<IGroup213Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                1
            </Typography>
        </div>
    );
};

export default Group213;



