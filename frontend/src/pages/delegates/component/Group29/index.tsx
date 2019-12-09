import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group29/style';
import Typography from '@material-ui/core/Typography';

interface IGroup29Props {
}

const Group29: React.FC<IGroup29Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                1
            </Typography>
        </div>
    );
};

export default Group29;



