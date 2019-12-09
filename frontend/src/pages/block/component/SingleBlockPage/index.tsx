import React from 'react';
import { useStyles } from 'src/pages/block/component/SingleBlockPage/style';
import BackButton5 from 'src/pages/block/component/BackButton5';
import PageTitle13 from 'src/pages/block/component/PageTitle13';
import BlockInfo from 'src/pages/block/component/BlockInfo';
import BlockTransactions1 from 'src/pages/block/component/BlockTransactions1';
import CommentAndPrivateNote1 from 'src/pages/block/component/CommentAndPrivateNote1';

interface ISingleBlockPageProps {
}

const SingleBlockPage: React.FC<ISingleBlockPageProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <BackButton5 />
            </div>
            <div className={classes.div1} >
                <PageTitle13 />
            </div>
            <div className={classes.div2} >
                <BlockInfo />
            </div>
            <div className={classes.div3} >
                <BlockTransactions1 />
                <CommentAndPrivateNote1 />
            </div>
        </div>
    );
};

export default SingleBlockPage;



