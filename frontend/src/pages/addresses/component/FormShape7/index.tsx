import React from 'react';
import { useStyles } from 'src/pages/addresses/component/FormShape7/style';
import BaseSurfaceShapeSurfaceMasterShape7 from 'src/pages/addresses/component/BaseSurfaceShapeSurfaceMasterShape7';
import Typography from '@material-ui/core/Typography';

interface IFormShape7Props {
}

const FormShape7: React.FC<IFormShape7Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <BaseSurfaceShapeSurfaceMasterShape7 />
            <Typography className={classes.typography} >
                lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
            </Typography>
        </div>
    );
};

export default FormShape7;



