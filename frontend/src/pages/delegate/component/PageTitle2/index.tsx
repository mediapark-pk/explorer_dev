import React from 'react';
import { useStyles } from 'src/pages/delegate/component/PageTitle2/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import PageTitle2Model from 'src/pages/delegate/component/PageTitle2/model';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ButtonAddToFav1 from 'src/pages/delegate/component/ButtonAddToFav1';

interface IPageTitle2Props {
}

const PageTitle2: React.FC<IPageTitle2Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(PageTitle2Model);

    return (
        <div className={classes.root} >
            <div className={classes.custom2513084} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iNDgiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA0OCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ2IDEyLjY1MjhMMjQgMC41NzAzMTJMMiAxMi42NTI4TTQ2IDEyLjY1MjhMMjQgMjQuNzM1Mk00NiAxMi42NTI4VjM2LjYwOTdMMjQgNDguNTcwM00yIDEyLjY1MjhMMjQgMjQuNzM1Mk0yIDEyLjY1MjhMMiAzNi42MDk3TDI0IDQ4LjU3MDNNMjQgMjQuNzM1MlY0OC41NzAzIiBzdHJva2U9IiMzRDkwRTMiLz4KPC9zdmc+Cg=='/>
            </div>
            <Typography className={classes.typography} >
                Delegate TDALLIANCE1
            </Typography>
            <Badge className={classes.badge} >
                <Typography className={classes.typography1} >
                    TOP 10
                </Typography>
            </Badge>
            <ButtonAddToFav1 />
        </div>
    );
};

export default observer(PageTitle2);



