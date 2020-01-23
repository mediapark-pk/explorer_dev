import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from 'src/pages/delegates/component/PageTitle/style';
import { observer } from 'mobx-react-lite';

interface IPageTitleProps {}

const PageTitle: React.FC<IPageTitleProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Delegates
            </Typography>
        </div>
    );
};

export default observer(PageTitle);
