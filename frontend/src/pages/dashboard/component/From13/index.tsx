import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/From13/style';
import From14 from 'src/pages/dashboard/component/From14';

interface IFrom13Props {
}

const From13: React.FC<IFrom13Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <From14 />
        </div>
    );
};

export default From13;



