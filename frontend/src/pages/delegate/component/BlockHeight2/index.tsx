import React from 'react';
import { useStyles } from 'src/pages/delegate/component/BlockHeight2/style';
import Typography from '@material-ui/core/Typography';

interface IBlockHeight2Props {
    fee?: string;
}

const BlockHeight2: React.FC<IBlockHeight2Props> = ({ fee, }) => {
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

export default BlockHeight2;



