import React from 'react';
import { useStyles } from 'src/pages/Forget/component/FormShape5/style';
import BaseSurfaceShapeSurfaceMasterShape5 from 'src/pages/Forget/component/BaseSurfaceShapeSurfaceMasterShape5';
import Typography from '@material-ui/core/Typography';

interface IFormShape5Props {
}

const FormShape5: React.FC<IFormShape5Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <BaseSurfaceShapeSurfaceMasterShape5 />
            <Typography className={classes.typography} >
                lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll        
            </Typography>
        </div>
    );
};

export default FormShape5;



