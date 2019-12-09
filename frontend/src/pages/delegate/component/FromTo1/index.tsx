import React from 'react';
import { useStyles } from 'src/pages/delegate/component/FromTo1/style';
import Picture3 from 'src/pages/delegate/component/Picture3';

interface IFromTo1Props {
}

const FromTo1: React.FC<IFromTo1Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Picture3 />
        </div>
    );
};

export default FromTo1;



