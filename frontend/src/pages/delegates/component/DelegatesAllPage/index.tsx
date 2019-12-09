import React from 'react';
import { useStyles } from 'src/pages/delegates/component/DelegatesAllPage/style';
import PageTitle from 'src/pages/delegates/component/PageTitle';
import BlockAllInfo from 'src/pages/delegates/component/BlockAllInfo';
import BlockAllBlocks from 'src/pages/delegates/component/BlockAllBlocks';

interface IDelegatesAllPageProps {
}

const DelegatesAllPage: React.FC<IDelegatesAllPageProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <PageTitle />
            <BlockAllInfo />
            <BlockAllBlocks />
        </div>
    );
};

export default DelegatesAllPage;



