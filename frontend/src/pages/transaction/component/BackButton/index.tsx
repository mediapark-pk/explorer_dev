import React from 'react';
import { useStyles } from 'src/pages/transaction/component/BackButton/style';
import Button from '@material-ui/core/Button';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router';

interface IBackButton4Props {
}

const BackButton: React.FC<IBackButton4Props> = ({ }) => {
    const classes = useStyles({});
    const history = useHistory();

    return (
        <div className={classes.root} >
            <Button
                className={classes.button}
                startIcon={<ArrowBackIos/>}
                onClick={() => history.goBack()}
            >
                    Back
            </Button>
        </div>
    );
};

export default BackButton;
