import React from 'react';
import { useStyles } from 'src/pages/addresses/component/FormShape6/style';
import BaseSurfaceShapeSurfaceMasterShape6 from 'src/pages/addresses/component/BaseSurfaceShapeSurfaceMasterShape6';
import Typography from '@material-ui/core/Typography';

interface IFormShape6Props {
}

const FormShape6: React.FC<IFormShape6Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <BaseSurfaceShapeSurfaceMasterShape6 />
            <Typography className={classes.typography} >
                llllllllllllllllllllllllllllllllllll
            </Typography>
        </div>
    );
};

export default FormShape6;



