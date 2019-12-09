import React from 'react';
import { useStyles } from 'src/pages/delegate/component/Picture5/style';
import Group42 from 'src/pages/delegate/component/Group42';

interface IPicture5Props {
}

const Picture5: React.FC<IPicture5Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Group42 />
        </div>
    );
};

export default Picture5;



