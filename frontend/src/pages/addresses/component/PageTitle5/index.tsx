import React from 'react';
import { useStyles } from 'src/pages/addresses/component/PageTitle5/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import PageTitle5Model from 'src/pages/addresses/component/PageTitle5/model';
import Typography from '@material-ui/core/Typography';

interface IPageTitle5Props {
}

const PageTitle5: React.FC<IPageTitle5Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(PageTitle5Model);

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Addresses
            </Typography>
        </div>
    );
};

export default observer(PageTitle5);



