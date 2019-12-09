import React from 'react';
import { useStyles } from 'src/pages/addresses/component/InfoBloks/style';
import Delegates12 from 'src/pages/addresses/component/Delegates12';
import Addresses13 from 'src/pages/addresses/component/Addresses13';
import Transactions11 from 'src/pages/addresses/component/Transactions11';
import Bloks from 'src/pages/addresses/component/Bloks';

interface IInfoBloksProps {
    item?: any;
}

const InfoBloks: React.FC<IInfoBloksProps> = ({ item, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Delegates12 item={item} />
            <Addresses13 item={item} />
            <Transactions11 item={item} />
            <Bloks />
        </div>
    );
};

export default InfoBloks;



