import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group218/style';
import Typography from '@material-ui/core/Typography';

interface IGroup218Props {
}

const Group218: React.FC<IGroup218Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                1
            </Typography>
        </div>
    );
};

export default Group218;



