import React from 'react';
import { useStyles } from 'src/pages/delegates/component/DelegatesActivePage/style';
import PageTitle10 from 'src/pages/delegates/component/PageTitle10';
import BlockAllInfo3 from 'src/pages/delegates/component/BlockAllInfo3';
import BlockAllBlocks2 from 'src/pages/delegates/component/BlockAllBlocks2';

interface IDelegatesActivePageProps {
}

const DelegatesActivePage: React.FC<IDelegatesActivePageProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <PageTitle10 />
            <BlockAllInfo3 />
            <BlockAllBlocks2 />
        </div>
    );
};

export default DelegatesActivePage;



