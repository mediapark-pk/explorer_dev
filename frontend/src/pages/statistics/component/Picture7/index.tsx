import React from 'react';
import { useStyles } from 'src/pages/statistics/component/Picture7/style';
import Group43 from 'src/pages/statistics/component/Group43';

interface IPicture7Props {
}

const Picture7: React.FC<IPicture7Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Group43 />
        </div>
    );
};

export default Picture7;



