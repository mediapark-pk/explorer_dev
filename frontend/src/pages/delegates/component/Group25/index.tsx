import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group25/style';
import Typography from '@material-ui/core/Typography';

interface IGroup25Props {
}

const Group25: React.FC<IGroup25Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                1
            </Typography>
        </div>
    );
};

export default Group25;



