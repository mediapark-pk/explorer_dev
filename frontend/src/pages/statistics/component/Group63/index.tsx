import React from 'react';
import { useStyles } from 'src/pages/statistics/component/Group63/style';
import Typography from '@material-ui/core/Typography';

interface IGroup63Props {
}

const Group63: React.FC<IGroup63Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <div className={classes.vector} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMSIgaGVpZ2h0PSI0IiB2aWV3Qm94PSIwIDAgMSA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMC41IDMuODE1NDRMMC41IDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA2Ii8+Cjwvc3ZnPgo='/>
                </div>
            </div>
            <div className={classes.div1} >
                <Typography className={classes.typography} >
                    2017
                </Typography>
                <Typography className={classes.typography1} >
                    2018
                </Typography>
            </div>
        </div>
    );
};

export default Group63;



