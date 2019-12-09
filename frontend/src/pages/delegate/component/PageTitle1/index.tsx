import React from 'react';
import { useStyles } from 'src/pages/delegate/component/PageTitle1/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import PageTitle1Model from 'src/pages/delegate/component/PageTitle1/model';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ButtonAddToFav from 'src/pages/delegate/component/ButtonAddToFav';

interface IPageTitle1Props {
}

const PageTitle1: React.FC<IPageTitle1Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(PageTitle1Model);

    return (
        <div className={classes.root} >
            <div className={classes.custom2512619} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iNDgiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA0OCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ2IDEyLjY1M0wyNCAwLjU3MDU1N0wyIDEyLjY1M000NiAxMi42NTNMMjQgMjQuNzM1NU00NiAxMi42NTNWMzYuNjFMMjQgNDguNTcwNk0yIDEyLjY1M0wyNCAyNC43MzU1TTIgMTIuNjUzTDIgMzYuNjFMMjQgNDguNTcwNk0yNCAyNC43MzU1VjQ4LjU3MDYiIHN0cm9rZT0iIzNEOTBFMyIvPgo8L3N2Zz4K'/>
            </div>
            <Typography className={classes.typography} >
                Delegate TDALLIANCE1
            </Typography>
            <Badge className={classes.badge} >
                <Typography className={classes.typography1} >
                    TOP 10
                </Typography>
            </Badge>
            <ButtonAddToFav />
        </div>
    );
};

export default observer(PageTitle1);



