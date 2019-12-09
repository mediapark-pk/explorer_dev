import React from 'react';
import { useStyles } from 'src/pages/blocks/component/BlockHeight4/style';
import Typography from '@material-ui/core/Typography';

interface IBlockHeight4Props {
    Blockheight?: string;
}

const BlockHeight4: React.FC<IBlockHeight4Props> = ({ Blockheight, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Block height
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { Blockheight }
            </Typography>
        </div>
    );
};

export default BlockHeight4;



