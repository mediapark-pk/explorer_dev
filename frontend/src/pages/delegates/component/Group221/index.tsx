import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group221/style';
import Typography from '@material-ui/core/Typography';

interface IGroup221Props {
}

const Group221: React.FC<IGroup221Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                1
            </Typography>
        </div>
    );
};

export default Group221;



