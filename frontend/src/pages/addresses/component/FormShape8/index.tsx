import React from 'react';
import { useStyles } from 'src/pages/addresses/component/FormShape8/style';
import BaseSurfaceShapeSurfaceMasterShape8 from 'src/pages/addresses/component/BaseSurfaceShapeSurfaceMasterShape8';
import Typography from '@material-ui/core/Typography';

interface IFormShape8Props {
}

const FormShape8: React.FC<IFormShape8Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <BaseSurfaceShapeSurfaceMasterShape8 />
            <Typography className={classes.typography} >
                llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
            </Typography>
        </div>
    );
};

export default FormShape8;



