import React from 'react';
import { useStyles } from 'src/pages/address/backlog/Bloks/style';
import DelegatesBlock3 from 'src/pages/address/backlog/DelegatesBlock3';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Add from '@material-ui/icons/Add';

interface IBloksProps {
}

const Bloks: React.FC<IBloksProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <DelegatesBlock3 />
            <Button
                className={classes.button}
                classes={{ root: classes.root1 }}
            >
                <Typography className={classes.typography} >
                    Add block
                </Typography>
                <Add className={classes.add} />
            </Button>
            <Typography className={classes.typography1} >
                You haven't added any blocks to favorites.
            </Typography>
        </div>
    );
};

export default Bloks;



