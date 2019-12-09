import React from 'react';
import { useStyles } from 'src/pages/blocks/component/ActiveNodes/style';
import Typography from '@material-ui/core/Typography';

interface IActiveNodesProps {
}

const ActiveNodes: React.FC<IActiveNodesProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Active nodes
            </Typography>
            <Typography className={classes.typography1} >
                65
            </Typography>
        </div>
    );
};

export default ActiveNodes;



