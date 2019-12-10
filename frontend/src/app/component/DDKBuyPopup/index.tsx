import React from 'react';
import { useStyles } from 'src/app/component/DDKBuyPopup/style';
import Button from '@material-ui/core/Button';
import { ModalContext } from 'src/uikit/modal/ModalManager';

interface IDDKBuyPopupProps {
}

const DDKBuyPopup: React.FC<IDDKBuyPopupProps> = ({ }) => {
    const classes = useStyles({});

    const modalContext = React.useContext(ModalContext);
    const close = () => modalContext.close();

    return (
        <div className={classes.root} >
             <h3>Buy DDK popup</h3>
             <p>TODO: Do design here</p>
             <Button className={classes.button} onClick={close}>Ok</Button>
        </div>
    );
};

export default DDKBuyPopup;



