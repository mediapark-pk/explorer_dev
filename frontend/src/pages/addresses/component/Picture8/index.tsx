import React from 'react';
import { useStyles } from 'src/pages/addresses/component/Picture8/style';
import Group44 from 'src/pages/addresses/component/Group44';

interface IPicture8Props {
}

const Picture8: React.FC<IPicture8Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Group44 />
        </div>
    );
};

export default Picture8;



