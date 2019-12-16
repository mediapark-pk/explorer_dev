import React from 'react';
import { useStyles } from 'src/pages/statistics/component/PageTitle3/style';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import PageTitle3Model from 'src/pages/statistics/component/PageTitle3/model';
import Typography from '@material-ui/core/Typography';

interface IPageTitle3Props {
}

const PageTitle3: React.FC<IPageTitle3Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(PageTitle3Model);

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Statistics
            </Typography>
        </div>
    );
};

export default observer(PageTitle3);



