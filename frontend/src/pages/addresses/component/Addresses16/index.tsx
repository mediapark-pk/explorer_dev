import React from 'react';
import { useStyles } from 'src/pages/addresses/component/Addresses16/style';
import DelegatesBlock5 from 'src/pages/addresses/component/DelegatesBlock5';
import PrivateNote2 from 'src/pages/addresses/component/PrivateNote2';

interface IAddresses16Props {
}

const Addresses16: React.FC<IAddresses16Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <DelegatesBlock5 />
            <PrivateNote2 />
        </div>
    );
};

export default Addresses16;



