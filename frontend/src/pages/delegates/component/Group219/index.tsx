import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group219/style';
import Typography from '@material-ui/core/Typography';

interface IGroup219Props {
}

const Group219: React.FC<IGroup219Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                1
            </Typography>
        </div>
    );
};

export default Group219;



