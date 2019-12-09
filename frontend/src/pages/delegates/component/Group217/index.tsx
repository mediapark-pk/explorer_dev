import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group217/style';
import Typography from '@material-ui/core/Typography';

interface IGroup217Props {
}

const Group217: React.FC<IGroup217Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                1
            </Typography>
        </div>
    );
};

export default Group217;



