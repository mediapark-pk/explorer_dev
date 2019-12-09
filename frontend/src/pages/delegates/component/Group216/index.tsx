import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group216/style';
import Typography from '@material-ui/core/Typography';

interface IGroup216Props {
}

const Group216: React.FC<IGroup216Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                1
            </Typography>
        </div>
    );
};

export default Group216;



