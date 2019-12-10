import React, { useEffect } from 'react';
import { useStyles } from 'src/app/component/Header/style';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import DDKExplorerLogo from 'src/app/component/DDKExplorerLogo';
import AppMenu from 'src/app/component/AppMenu';
import ProfileMenu from 'src/app/component/ProfileMenu';
import SearchBox from 'src/app/component/SearchBox';
import HeaderModel from 'src/app/component/Header/model';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';

interface IHeaderProps {
}

const Header: React.FC<IHeaderProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(HeaderModel);

    return (
        <AppBar className={classes.appBar} >
            <Toolbar className={classes.toolbar} >
                <DDKExplorerLogo />
                {model.isSearchOpen ?
                    <SearchBox />
                :
                    <AppMenu />
                }
                <ProfileMenu />
            </Toolbar>
        </AppBar>
    );
};

export default observer(Header);



