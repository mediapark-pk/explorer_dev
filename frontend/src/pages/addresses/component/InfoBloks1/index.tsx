import React from 'react';
import { useStyles } from 'src/pages/addresses/component/InfoBloks1/style';
import Delegates15 from 'src/pages/addresses/component/Delegates15';
import Addresses16 from 'src/pages/addresses/component/Addresses16';
import Transactions14 from 'src/pages/addresses/component/Transactions14';
import Bloks2 from 'src/pages/addresses/component/Bloks2';

interface IInfoBloks1Props {
}

const InfoBloks1: React.FC<IInfoBloks1Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Delegates15 />
            <Addresses16 />
            <Transactions14 />
            <Bloks2 />
        </div>
    );
};

export default InfoBloks1;



