import React, { PropsWithChildren } from 'react';
import { useStyles } from 'src/pages/address/component/PageTitle/style';
import { observer } from 'mobx-react-lite';
import Typography from '@material-ui/core/Typography';

interface IPageTitleProps extends PropsWithChildren<any> {
    headline: string;
}

const PageTitle: React.FC<IPageTitleProps> = ({ headline, children }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root}>
            <Typography variant={'h5'}>
                {headline} {children}
            </Typography>
        </div>
    );
};

export default observer(PageTitle);
