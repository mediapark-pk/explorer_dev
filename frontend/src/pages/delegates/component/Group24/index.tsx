import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group24/style';
import Typography from '@material-ui/core/Typography';

interface IGroup24Props {
}

const Group24: React.FC<IGroup24Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                1
            </Typography>
        </div>
    );
};

export default Group24;



