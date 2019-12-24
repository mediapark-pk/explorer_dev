import React from 'react';
import { useStyles } from 'src/pages/address/backlog/Transactions14/style';
import DelegatesBlock6 from 'src/pages/address/backlog/DelegatesBlock6';
import PrivateNote3 from 'src/pages/address/backlog/PrivateNote3';
import PrivateNote4 from 'src/pages/address/backlog/PrivateNote4';

interface ITransactions14Props {
}

const Transactions14: React.FC<ITransactions14Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <DelegatesBlock6 />
            <PrivateNote3 />
            <PrivateNote4 />
        </div>
    );
};

export default Transactions14;



