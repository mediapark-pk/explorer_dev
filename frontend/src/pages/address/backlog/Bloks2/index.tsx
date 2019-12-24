import React from 'react';
import { useStyles } from 'src/pages/address/backlog/Bloks2/style';
import DelegatesBlock7 from 'src/pages/address/backlog/DelegatesBlock7';
import Typography from '@material-ui/core/Typography';

interface IBloks2Props {
}

const Bloks2: React.FC<IBloks2Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <DelegatesBlock7 />
            <Typography className={classes.typography} >
                You haven't added any notes to favorites.
            </Typography>
        </div>
    );
};

export default Bloks2;



