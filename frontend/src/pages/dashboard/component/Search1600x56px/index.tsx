import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/Search1600x56px/style';
import ButtonGroup1 from 'src/pages/dashboard/component/ButtonGroup1';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import WithIccon from 'src/pages/dashboard/component/WithIccon';

interface ISearch1600x56pxProps {
}

const Search1600x56px: React.FC<ISearch1600x56pxProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <ButtonGroup1 />
            <TextField className={classes.textField} >
                <Typography className={classes.typography} >
                    Search by Block, transaction or account
                </Typography>
            </TextField>
            <Button
                className={classes.button}
                classes={{ root: classes.root1 }}
            >
                <WithIccon />
            </Button>
        </div>
    );
};

export default Search1600x56px;



