import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group21/style';
import Typography from '@material-ui/core/Typography';

interface IGroup21Props {
}

const Group21: React.FC<IGroup21Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                1
            </Typography>
        </div>
    );
};

export default Group21;



