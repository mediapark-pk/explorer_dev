import React from 'react';
import { useStyles } from 'src/pages/statistics/component/PageTitle4/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import PageTitle4Model from 'src/pages/statistics/component/PageTitle4/model';
import Typography from '@material-ui/core/Typography';

interface IPageTitle4Props {
}

const PageTitle4: React.FC<IPageTitle4Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(PageTitle4Model);

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Total Transaction
            </Typography>
        </div>
    );
};

export default observer(PageTitle4);



