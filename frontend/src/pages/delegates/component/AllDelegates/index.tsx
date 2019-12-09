import React from 'react';
import { useStyles } from 'src/pages/delegates/component/AllDelegates/style';
import Typography from '@material-ui/core/Typography';

interface IAllDelegatesProps {
    Blockheight?: string;
}

const AllDelegates: React.FC<IAllDelegatesProps> = ({ Blockheight, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                All delegates
            </Typography>
            <Typography
                className={classes.typography1}
            >
                { Blockheight }
            </Typography>
        </div>
    );
};

export default AllDelegates;



