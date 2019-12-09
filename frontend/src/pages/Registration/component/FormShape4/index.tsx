import React from 'react';
import { useStyles } from 'src/pages/Registration/component/FormShape4/style';
import BaseSurfaceShapeSurfaceMasterShape4 from 'src/pages/Registration/component/BaseSurfaceShapeSurfaceMasterShape4';
import Typography from '@material-ui/core/Typography';

interface IFormShape4Props {
}

const FormShape4: React.FC<IFormShape4Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <BaseSurfaceShapeSurfaceMasterShape4 />
            <Typography className={classes.typography} >
                lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll 
            </Typography>
        </div>
    );
};

export default FormShape4;



