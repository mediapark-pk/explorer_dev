import React from 'react';
import { useStyles } from 'src/pages/blocks/component/BlocksPage/style';
import PageTitle from 'src/pages/blocks/component/PageTitle';
import BlockBlockchainInfo from 'src/pages/blocks/component/BlockBlockchainInfo';
import BlocksTable from 'src/pages/blocks/component/BlocksTable';
import { useDI } from '@app/core';
import BlocksPageModel from 'src/pages/blocks/component/BlocksPage/model';

interface IBlocksPageProps {
}

const BlocksPage: React.FC<IBlocksPageProps> = ({ }) => {
    const classes = useStyles({});
    const blocksPageModel = useDI(BlocksPageModel);

    return (
        <div className={classes.root} >
            <PageTitle />
            {/* <BlockBlockchainInfo dataProvider={blocksPageModel.transactionsVolumeDataProvider} /> */}
            <BlockBlockchainInfo dataProvider={blocksPageModel.marketCapitalizationDataProvider} />
            <BlocksTable dataProvider={blocksPageModel.dataProvider} />
        </div>
    );
};

export default BlocksPage;
