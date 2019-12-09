import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group2/style';
import Typography from '@material-ui/core/Typography';

interface IGroup2Props {
}

const Group2: React.FC<IGroup2Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                1
            </Typography>
        </div>
    );
};

export default Group2;



