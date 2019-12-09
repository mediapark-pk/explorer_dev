import React from 'react';
import { useStyles } from 'src/app/component/Header/style';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import DDKExplorerLogo from 'src/app/component/DDKExplorerLogo';
import AppMenu from 'src/app/component/AppMenu';
import ProfileMenu from 'src/app/component/ProfileMenu';

interface IHeaderProps {
}

const Header: React.FC<IHeaderProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <AppBar className={classes.appBar} >
                <Toolbar
                    className={classes.toolbar}
                    classes={{ root: classes.root1 }}
                >
                    <DDKExplorerLogo />
                    <AppMenu />
                    <ProfileMenu />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;



