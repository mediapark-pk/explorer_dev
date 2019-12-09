import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/To13/style';
import To14 from 'src/pages/dashboard/component/To14';

interface ITo13Props {
}

const To13: React.FC<ITo13Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <To14 />
        </div>
    );
};

export default To13;



