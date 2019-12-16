import React from 'react';
import { useStyles } from 'src/pages/block/component/BlockInfo/style';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import BlockInfoModel from 'src/pages/block/component/BlockInfo/model';
import BlockId from 'src/pages/block/component/BlockId';
import ForgedBy from 'src/pages/block/component/ForgedBy';
import DateTime2 from 'src/pages/block/component/DateTime2';
import Volume1 from 'src/pages/block/component/Volume1';
import Fee2 from 'src/pages/block/component/Fee2';

interface IBlockInfoProps {
}

const BlockInfo: React.FC<IBlockInfoProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(BlockInfoModel);

    return (
        <div className={classes.root} >
            <BlockId blockId={model.blockId} />
            <ForgedBy generatorName={model.generatorName} />
            <DateTime2 createdAt={model.createdAt} />
            <Volume1 volume={model.volume} />
            <Fee2 fee={model.fee} />
        </div>
    );
};

export default observer(BlockInfo);



