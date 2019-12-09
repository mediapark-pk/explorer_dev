import React from 'react';
import { useStyles } from 'src/pages/Registration/component/FormShape2/style';
import BaseSurfaceShapeSurfaceMasterShape2 from 'src/pages/Registration/component/BaseSurfaceShapeSurfaceMasterShape2';
import Typography from '@material-ui/core/Typography';

interface IFormShape2Props {
}

const FormShape2: React.FC<IFormShape2Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <BaseSurfaceShapeSurfaceMasterShape2 />
            <Typography className={classes.typography} >
                llllllllllllllllllllllllllllllllllll
            </Typography>
        </div>
    );
};

export default FormShape2;



