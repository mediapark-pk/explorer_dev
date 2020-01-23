import React, { Fragment } from 'react';
import { useStyles } from 'src/popups/QRModal/style';
import { ModalContext, ModalManager } from '@app/ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faQrcodeIcon from '@fortawesome/free-solid-svg-icons/faQrcode';
import QRCode from 'qrcode.react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';

interface IQRModalProps {
    data: string;
}

const QRModal: React.FC<IQRModalProps> = ({ data }) => {
    const classes = useStyles({});
    const modalContext = React.useContext(ModalContext);

    const closePopup = React.useCallback(() => modalContext.close(), []);

    return (
        <Fragment>
            <DialogTitle disableTypography={true} className={classes.title}>
                <Typography variant='h4' component='h3' color='inherit'>
                    Scan QR
                </Typography>
            </DialogTitle>
            <DialogActions className={classes.bg}>
                <IconButton aria-label='Close' className={classes.closeButton} onClick={closePopup}>
                    <CloseIcon/>
                </IconButton>
            </DialogActions>
            <DialogContent className={classes.root}>
                <div className={classes.content}>
                    <Typography variant='subtitle1' color='inherit'>{data}</Typography>
                </div>
                <div className={classes.content}>
                    <QRCode size={168} value={data} includeMargin={true}/>
                </div>
            </DialogContent>
        </Fragment>
    );
};

export const QRModalIcon: React.FC<IQRModalProps> = ({ data }) => {
    const classes = useStyles({});
    const modalManager = useDI(ModalManager);

    const openPopup = React.useCallback(() => modalManager.show(<QRModal data={data} />), [data]);

    return (
        <Button
            className={classes.qrCodeIcon}
            onClick={openPopup}
        >
            <FontAwesomeIcon icon={faQrcodeIcon} className={classes.icon}/>
        </Button>
    );
};

export default QRModal;
