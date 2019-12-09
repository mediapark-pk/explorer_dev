import React from 'react';
import { useStyles } from 'src/pages/delegate/component/Group211/style';
import From2 from 'src/pages/delegate/component/From2';
import To2 from 'src/pages/delegate/component/To2';

interface IGroup211Props {
}

const Group211: React.FC<IGroup211Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <From2 />
            <To2 />
        </div>
    );
};

export default Group211;



