import React from 'react';
import { useStyles } from 'src/pages/Registration/component/FormShape3/style';
import BaseSurfaceShapeSurfaceMasterShape3 from 'src/pages/Registration/component/BaseSurfaceShapeSurfaceMasterShape3';
import Typography from '@material-ui/core/Typography';

interface IFormShape3Props {
}

const FormShape3: React.FC<IFormShape3Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <BaseSurfaceShapeSurfaceMasterShape3 />
            <Typography className={classes.typography} >
                llllllllllllllllllllllllllllllllllllllllllllllllllllllllll
            </Typography>
        </div>
    );
};

export default FormShape3;



