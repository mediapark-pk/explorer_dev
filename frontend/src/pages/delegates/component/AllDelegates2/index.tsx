import React from 'react';
import { useStyles } from 'src/pages/delegates/component/AllDelegates2/style';
import Typography from '@material-ui/core/Typography';

interface IAllDelegates2Props {
    Blockheight?: string;
}

const AllDelegates2: React.FC<IAllDelegates2Props> = ({ Blockheight, }) => {
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

export default AllDelegates2;



