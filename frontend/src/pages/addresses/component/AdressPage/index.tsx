import React from 'react';
import { useStyles } from 'src/pages/addresses/component/AdressPage/style';
import PageTitle5 from 'src/pages/addresses/component/PageTitle5';
import BlockAllInfo2 from 'src/pages/addresses/component/BlockAllInfo2';
import BlockAllBlocks1 from 'src/pages/addresses/component/BlockAllBlocks1';

interface IAdressPageProps {
}

const AdressPage: React.FC<IAdressPageProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <PageTitle5 />
            <BlockAllInfo2 />
            <BlockAllBlocks1 />
        </div>
    );
};

export default AdressPage;



