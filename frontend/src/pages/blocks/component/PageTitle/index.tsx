import React from 'react';
import { useDI } from '@app/core';
import { useStyles } from 'src/pages/blocks/component/PageTitle/style';
import { observer } from 'mobx-react-lite';
import PageTitleModel from 'src/pages/blocks/component/PageTitle/model';
import Typography from '@material-ui/core/Typography';

interface IPageTitleProps {
}

const PageTitle: React.FC<IPageTitleProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Blocks
            </Typography>
        </div>
    );
};

export default observer(PageTitle);



