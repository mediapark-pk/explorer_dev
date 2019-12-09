import React from 'react';
import { useStyles } from 'src/pages/delegates/component/PageTitle/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import PageTitleModel from 'src/pages/delegates/component/PageTitle/model';
import Typography from '@material-ui/core/Typography';

interface IPageTitleProps {
}

const PageTitle: React.FC<IPageTitleProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(PageTitleModel);

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Delegates
            </Typography>
        </div>
    );
};

export default observer(PageTitle);



