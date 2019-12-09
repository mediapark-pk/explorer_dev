import React from 'react';
import { useStyles } from 'src/pages/Login/component/FormShape1/style';
import BaseSurfaceShapeSurfaceMasterShape1 from 'src/pages/Login/component/BaseSurfaceShapeSurfaceMasterShape1';
import Typography from '@material-ui/core/Typography';

interface IFormShape1Props {
}

const FormShape1: React.FC<IFormShape1Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <BaseSurfaceShapeSurfaceMasterShape1 />
            <Typography className={classes.typography} >
                llllllllllllllllllllllllllllllllllllllllllllllllllllllllll
            </Typography>
        </div>
    );
};

export default FormShape1;



