import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/BlockSearch/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import BlockSearchModel from 'src/pages/dashboard/component/BlockSearch/model';
import Search1600x56px from 'src/pages/dashboard/component/Search1600x56px';

interface IBlockSearchProps {
}

const BlockSearch: React.FC<IBlockSearchProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(BlockSearchModel);

    return (
        <div className={classes.root} >
            <Search1600x56px />
        </div>
    );
};

export default observer(BlockSearch);



