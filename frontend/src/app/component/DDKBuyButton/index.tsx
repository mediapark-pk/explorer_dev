import React from 'react';
import { useStyles } from 'src/app/component/DDKBuyButton/style';
import { useDI } from 'src/core/di';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ModalManager from 'src/uikit/modal/ModalManager';
import DDKBuyPopup from 'src/app/component/DDKBuyPopup';

interface IDDKBuyButtonProps {
}

const DDKBuyButton: React.FC<IDDKBuyButtonProps> = ({ }) => {
    const classes = useStyles({});

    const openDDKBuyPopup = () => useDI(ModalManager).show(<DDKBuyPopup/>);

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



