import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group215/style';
import Typography from '@material-ui/core/Typography';

interface IGroup215Props {
}

const Group215: React.FC<IGroup215Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                1
            </Typography>
        </div>
    );
};

export default Group215;



