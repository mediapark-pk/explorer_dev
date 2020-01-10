import React from 'react';
import { useStyles } from 'src/pages/address/backlog/PageTitle8/style';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import PageTitle8Model from 'src/pages/address/backlog/PageTitle8/model';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

interface IPageTitle8Props {
}

const PageTitle8: React.FC<IPageTitle8Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(PageTitle8Model);

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                My profile
            </Typography>
            <Typography className={classes.typography1} >
                You logined as ddkforger@email.com
            </Typography>
            <Button
                className={classes.button}
                classes={{ root: classes.root1 }}
            >
                <Typography className={classes.typography2} >
                    Logout
                </Typography>
                <div className={classes.baselineExitToApp24px} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjA5IDE1LjU5TDExLjUgMTdMMTYuNSAxMkwxMS41IDdMMTAuMDkgOC40MUwxMi42NyAxMUgzVjEzSDEyLjY3TDEwLjA5IDE1LjU5Wk0xOSAzSDVDMy44OSAzIDMgMy45IDMgNVY5SDVWNUgxOVYxOUg1VjE1SDNWMTlDMyAyMC4xIDMuODkgMjEgNSAyMUgxOUMyMC4xIDIxIDIxIDIwLjEgMjEgMTlWNUMyMSAzLjkgMjAuMSAzIDE5IDNaIiBmaWxsPSIjM0Q5MEUzIi8+Cjwvc3ZnPgo='/>
                </div>
            </Button>
        </div>
    );
};

export default observer(PageTitle8);


