import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group23/style';
import Typography from '@material-ui/core/Typography';

interface IGroup23Props {
}

const Group23: React.FC<IGroup23Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                1
            </Typography>
        </div>
    );
};

export default Group23;



