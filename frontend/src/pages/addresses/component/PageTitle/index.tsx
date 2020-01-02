import React from 'react';
import { useStyles } from 'src/pages/addresses/component/PageTitle/style';
import Typography from '@material-ui/core/Typography';

interface IPageTitleProps {
}

const PageTitle: React.FC<IPageTitleProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Addresses
            </Typography>
        </div>
    );
};

export default PageTitle;
