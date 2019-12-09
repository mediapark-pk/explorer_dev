import React from 'react';
import { useStyles } from 'src/pages/delegates/component/Group71/style';
import Group4 from 'src/pages/delegates/component/Group4';
import Group5 from 'src/pages/delegates/component/Group5';

interface IGroup71Props {
}

const Group71: React.FC<IGroup71Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Group4 />
            <Group5 />
        </div>
    );
};

export default Group71;



