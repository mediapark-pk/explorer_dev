import React from 'react';
import { useStyles } from 'src/app/component/DDKBuyButton/style';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

interface IDDKBuyButtonProps {
}

const DDKBuyButton: React.FC<IDDKBuyButtonProps> = ({ }) => {
    const classes = useStyles({});

    const buyDDK = () => alert("[TODO: Buy DDK pop-up here]");

    return (
        <div className={classes.root} >
            <Button className={classes.button} onClick={buyDDK}>
                <Typography className={classes.typography}>
                    Buy DDK
                </Typography>
            </Button>
        </div>
    );
};

export default DDKBuyButton;



