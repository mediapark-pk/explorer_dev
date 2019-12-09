import React from 'react';
import { useStyles } from 'src/pages/addresses/component/FormShape9/style';
import BaseSurfaceShapeSurfaceMasterShape9 from 'src/pages/addresses/component/BaseSurfaceShapeSurfaceMasterShape9';
import Typography from '@material-ui/core/Typography';

interface IFormShape9Props {
}

const FormShape9: React.FC<IFormShape9Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <BaseSurfaceShapeSurfaceMasterShape9 />
            <Typography className={classes.typography} >
                lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
            </Typography>
        </div>
    );
};

export default FormShape9;



