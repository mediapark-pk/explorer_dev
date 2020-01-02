import React from 'react';
import { useStyles } from 'src/pages/address/backlog/Addresses16/style';
import DelegatesBlock5 from 'src/pages/address/backlog/DelegatesBlock5';
import PrivateNote2 from 'src/pages/address/backlog/PrivateNote2';

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



