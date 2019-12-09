import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group27/style';
import Typography from '@material-ui/core/Typography';

interface IGroup27Props {
}

const Group27: React.FC<IGroup27Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                1
            </Typography>
        </div>
    );
};

export default Group27;



