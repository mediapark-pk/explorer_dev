import React from 'react';
import { useStyles } from 'src/pages/blocks/component/PageTitle14/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import PageTitle14Model from 'src/pages/blocks/component/PageTitle14/model';
import Typography from '@material-ui/core/Typography';

interface IPageTitle14Props {
}

const PageTitle14: React.FC<IPageTitle14Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(PageTitle14Model);

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Blocks
            </Typography>
        </div>
    );
};

export default observer(PageTitle14);



