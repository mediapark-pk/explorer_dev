import React from 'react';
import { useStyles } from 'src/pages/addresses/component/Delegates15/style';
import DelegatesBlock4 from 'src/pages/addresses/component/DelegatesBlock4';
import PrivateNote from 'src/pages/addresses/component/PrivateNote';
import PrivateNote1 from 'src/pages/addresses/component/PrivateNote1';

interface IDelegates15Props {
}

const Delegates15: React.FC<IDelegates15Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <DelegatesBlock4 />
            <PrivateNote />
            <PrivateNote1 />
        </div>
    );
};

export default Delegates15;



