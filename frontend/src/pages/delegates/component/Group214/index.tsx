import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group214/style';
import Typography from '@material-ui/core/Typography';

interface IGroup214Props {
}

const Group214: React.FC<IGroup214Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                1
            </Typography>
        </div>
    );
};

export default Group214;



