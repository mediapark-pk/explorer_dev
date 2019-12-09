import React from 'react';
import { useStyles } from 'src/pages/addresses/component/Group212/style';
import From6 from 'src/pages/addresses/component/From6';
import To6 from 'src/pages/addresses/component/To6';

interface IGroup212Props {
}

const Group212: React.FC<IGroup212Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <From6 />
            <To6 />
        </div>
    );
};

export default Group212;



