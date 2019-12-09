import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group26/style';
import Typography from '@material-ui/core/Typography';

interface IGroup26Props {
}

const Group26: React.FC<IGroup26Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                1
            </Typography>
        </div>
    );
};

export default Group26;



