import React from 'react';
import { useStyles } from 'src/pages/delegate/component/BlockHeight/style';
import Typography from '@material-ui/core/Typography';

interface IBlockHeightProps {
    fee?: string;
}

const BlockHeight: React.FC<IBlockHeightProps> = ({ fee, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Block height
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { fee }
            </Typography>
        </div>
    );
};

export default BlockHeight;



