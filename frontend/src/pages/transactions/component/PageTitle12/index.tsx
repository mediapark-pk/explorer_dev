import React from 'react';
import { useStyles } from 'src/pages/transactions/component/PageTitle12/style';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import PageTitle12Model from 'src/pages/transactions/component/PageTitle12/model';
import Typography from '@material-ui/core/Typography';

interface IPageTitle12Props {
}

const PageTitle12: React.FC<IPageTitle12Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(PageTitle12Model);

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Transactions
            </Typography>
        </div>
    );
};

export default observer(PageTitle12);



