import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/BlockDelegatesBlocksTransactions/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import BlockDelegatesBlocksTransactionsModel from 'src/pages/dashboard/component/BlockDelegatesBlocksTransactions/model';
import BlockDelegates from 'src/pages/dashboard/component/BlockDelegates';
import BlockBloks from 'src/pages/dashboard/component/BlockBloks';
import BlockTransactions3 from 'src/pages/dashboard/component/BlockTransactions3';

interface IBlockDelegatesBlocksTransactionsProps {
}

const BlockDelegatesBlocksTransactions: React.FC<IBlockDelegatesBlocksTransactionsProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(BlockDelegatesBlocksTransactionsModel);

    return (
        <div className={classes.root} >
            <BlockDelegates />
            <BlockBloks />
            <BlockTransactions3 />
        </div>
    );
};

export default observer(BlockDelegatesBlocksTransactions);



