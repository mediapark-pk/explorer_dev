import React from 'react';
import { useStyles } from 'src/pages/statistics/component/Group68/style';
import Group63 from 'src/pages/statistics/component/Group63';
import Typography from '@material-ui/core/Typography';

interface IGroup68Props {
}

const Group68: React.FC<IGroup68Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Group63 />
            <div className={classes.vector} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMSIgaGVpZ2h0PSI0IiB2aWV3Qm94PSIwIDAgMSA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMC41IDMuODE1NDRMMC41IDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA2Ii8+Cjwvc3ZnPgo='/>
            </div>
            <Typography className={classes.typography} >
                2019
            </Typography>
        </div>
    );
};

export default Group68;



