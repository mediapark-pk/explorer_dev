import React from 'react';
import { useStyles } from 'src/pages/address/backlog/AddresesSettingsPage/style';
import PageTitle9 from 'src/pages/address/backlog/PageTitle9';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

interface IAddresesSettingsPageProps {
}

const AddresesSettingsPage: React.FC<IAddresesSettingsPageProps> = ({ }) => {
    const classes = useStyles({});
    const [value, setValue] = React.useState<number>(0);

    return (
        <div className={classes.root} >
            <PageTitle9 />
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

export default AddresesSettingsPage;



