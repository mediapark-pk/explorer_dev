import React from 'react';
import { useStyles } from 'src/pages/address/backlog/AddresesProfilePage/style';
import PageTitle8 from 'src/pages/address/backlog/PageTitle8';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

interface IAddresesProfilePageProps {
}

const AddresesProfilePage: React.FC<IAddresesProfilePageProps> = ({ }) => {
    const classes = useStyles({});
    const [value, setValue] = React.useState<number>(0);

    return (
        <div className={classes.root} >
            <PageTitle8 />
            <Tabs
                className={classes.tabs}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
            >
                <Tab
                    className={classes.tab}
                    classes={{ root: classes.root1 }}
                    label={'Favorites'}
                />
                <Tab
                    className={classes.tab}
                    classes={{ root: classes.root2 }}
                    label={'Private notes'}
                />
                <Tab
                    className={classes.tab}
                    classes={{ root: classes.root3 }}
                    label={'Settings'}
                />
            </Tabs>
        </div>
    );
};

export default AddresesProfilePage;



