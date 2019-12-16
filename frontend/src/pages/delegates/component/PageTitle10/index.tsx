import React from 'react';
import { useStyles } from 'src/pages/delegates/component/PageTitle10/style';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import PageTitle10Model from 'src/pages/delegates/component/PageTitle10/model';
import Typography from '@material-ui/core/Typography';

interface IPageTitle10Props {
}

const PageTitle10: React.FC<IPageTitle10Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(PageTitle10Model);

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Delegates
            </Typography>
        </div>
    );
};

export default observer(PageTitle10);



