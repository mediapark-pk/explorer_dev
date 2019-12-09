import React from 'react';
import { useStyles } from 'src/pages/blocks/component/BlocksPage/style';
import PageTitle14 from 'src/pages/blocks/component/PageTitle14';
import BlockAllInfo5 from 'src/pages/blocks/component/BlockAllInfo5';
import BlockAllBlocks4 from 'src/pages/blocks/component/BlockAllBlocks4';

interface IBlocksPageProps {
}

const BlocksPage: React.FC<IBlocksPageProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <PageTitle14 />
            <BlockAllInfo5 />
            <BlockAllBlocks4 />
        </div>
    );
};

export default BlocksPage;



