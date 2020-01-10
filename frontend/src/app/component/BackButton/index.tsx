import React from 'react';
import { useStyles } from 'src/app/component/BackButton/style';
import Button from '@material-ui/core/Button';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router';

interface IBackButtonProps {
}

const BackButton: React.FC<IBackButtonProps> = ({ }) => {
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
