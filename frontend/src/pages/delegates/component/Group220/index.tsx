import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group220/style';
import Typography from '@material-ui/core/Typography';

interface IGroup220Props {
}

const Group220: React.FC<IGroup220Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                1
            </Typography>
        </div>
    );
};

export default Group220;



