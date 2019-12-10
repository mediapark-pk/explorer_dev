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

    const go = (url: string) => {
        alert("Open external link: " + url);
        close();
    };

    return (
        <div className={classes.root} >
             <h3 className={classes.h3}>Please choose exchanger</h3>
             <p className={classes.p}>Lorem ipsum uipsum, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
             <div className={classes.logos}>
                <Button className={classes.button} onClick={()=>go("/")}>
                    <img src="/public/img/logo-simex.png" alt="Simex" />
                </Button>
                <Button className={classes.button} onClick={()=>go("/")}>
                    <img src="/public/img/logo-dobi.png" alt="Dobi" />
                </Button>
                <Button className={classes.button} onClick={()=>go("/")}>
                    <img src="/public/img/logo-exmarkets.png" alt="Exmarkets" />
                </Button>
                <Button className={classes.button} onClick={()=>go("/")}>
                    <img src="/public/img/logo-vindax.png" alt="Vindax" />
                </Button>
                <Button className={classes.button} onClick={()=>go("/")}>
                    <img src="/public/img/logo-finexbox.png" alt="Finexbox" />
                </Button>
            </div>
        </div>
    );
};

export default DDKBuyPopup;



