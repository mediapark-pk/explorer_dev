import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group22/style';
import Typography from '@material-ui/core/Typography';

interface IGroup22Props {
}

const Group22: React.FC<IGroup22Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                1
            </Typography>
        </div>
    );
};

export default Group22;



