import React from 'react';
import { useStyles } from 'src/pages/block/component/BlockPage/style';
import PageTitle from 'src/pages/block/component/PageTitle';
import BlockInfo from 'src/pages/block/component/BlockInfo';
import BlockTransactions from 'src/pages/block/component/BlockTransactions';
import BackButton from 'src/app/component/BackButton';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';
import { useModel } from '@app/core/src';
import BlockPageModel from 'src/pages/block/component/BlockPage/model';
import CircularProgress from '@material-ui/core/CircularProgress';

interface IBlockPageProps {
}

const BlockPage: React.FC<IBlockPageProps> = ({}) => {
    const classes = useStyles({});
    const { id } = useParams<{ id?: string }>();
    const model = useModel(BlockPageModel);

    React.useEffect(() => {
        if (id) {
            model.loadBlock(id);
        }
    }, [id]);

    if (model.isLoading) {
        return (
            <div className={classes.loading}>
                <CircularProgress size={72}/>
            </div>
        );
    }
    return (
        <div className={classes.root}>
            <BackButton/>
            <PageTitle headline='Block'>{model.block.height}</PageTitle>
            <BlockInfo block={model.block}/>
            <BlockTransactions/>
        </div>
    );
};

export default observer(BlockPage);
