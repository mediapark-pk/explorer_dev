import React from 'react';
import { useStyles } from 'src/pages/Login/component/FormShape/style';
import BaseSurfaceShapeSurfaceMasterShape from 'src/pages/Login/component/BaseSurfaceShapeSurfaceMasterShape';
import Typography from '@material-ui/core/Typography';

interface IFormShapeProps {
}

const FormShape: React.FC<IFormShapeProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <BaseSurfaceShapeSurfaceMasterShape />
            <Typography className={classes.typography} >
                llllllllllllllllllllllllllllllllllll
            </Typography>
        </div>
    );
};

export default FormShape;



