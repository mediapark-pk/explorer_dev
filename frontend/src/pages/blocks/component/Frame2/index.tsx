import React from 'react';
import { useStyles } from 'src/pages/blocks/component/Frame2/style';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

interface IFrame2Props {
}

const Frame2: React.FC<IFrame2Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Zoom
            </Typography>
            <Button
                className={classes.button}
                classes={{ root: classes.root1 }}
            >
                <Typography className={classes.typography1} >
                    1d
                </Typography>
            </Button>
            <Button
                className={classes.button1}
                classes={{ root: classes.root2 }}
            >
                <Typography className={classes.typography1} >
                    7d
                </Typography>
            </Button>
            <Button
                className={classes.button2}
                classes={{ root: classes.root1 }}
            >
                <Typography className={classes.typography2} >
                    1m
                </Typography>
            </Button>
            <Button
                className={classes.button3}
                classes={{ root: classes.root1 }}
            >
                <Typography className={classes.typography2} >
                    3m
                </Typography>
            </Button>
            <Button
                className={classes.button4}
                classes={{ root: classes.root1 }}
            >
                <Typography className={classes.typography2} >
                    All
                </Typography>
            </Button>
        </div>
    );
};

export default Frame2;



