import React from 'react';
import { useStyles } from 'src/app/component/DDKBuyButton/style';
import { useDI } from '@app/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ModalManager } from 'ui-kit';
import DDKBuyPopup from 'src/app/component/DDKBuyPopup';

interface IDDKBuyButtonProps {
}

const DDKBuyButton: React.FC<IDDKBuyButtonProps> = ({ }) => {
    const classes = useStyles({});

    const manager = useDI(ModalManager);
    const openDDKBuyPopup = () => manager.show(<DDKBuyPopup/>);

    return (
        <div className={classes.root} >
            <Button className={classes.button} onClick={openDDKBuyPopup}>
                <Typography className={classes.typography}>
                    Buy DDK
                </Typography>
            </Button>
        </div>
    );
};

export default DDKBuyButton;



