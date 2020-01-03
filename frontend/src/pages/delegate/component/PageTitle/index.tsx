import React from 'react';
import { useStyles } from 'src/pages/delegate/component/PageTitle/style';
import { Typography, Badge, Button } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { withRouter, useHistory } from 'react-router';
import MainPageModel from 'src/pages/delegate/component/MainPage/model';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';

interface IPageTitleProps { }

const PageTitle: React.FC<IPageTitleProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(MainPageModel);
    const history = useHistory();

    return (
        <div className={classes.root} >
            <div>
                <Button onClick={history.goBack}>
                    <Icons.KeyboardArrowLeft className={classes.button_icon} />
                    <Typography className={classes.button_text} >
                        Back
                    </Typography>
                </Button>
            </div>
            <div className={classes.base} >
                <div className={classes.titleWrapper}>
                    <div className={classes.icon} >
                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iNDgiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA0OCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ2IDEyLjY1M0wyNCAwLjU3MDU1N0wyIDEyLjY1M000NiAxMi42NTNMMjQgMjQuNzM1NU00NiAxMi42NTNWMzYuNjFMMjQgNDguNTcwNk0yIDEyLjY1M0wyNCAyNC43MzU1TTIgMTIuNjUzTDIgMzYuNjFMMjQgNDguNTcwNk0yNCAyNC43MzU1VjQ4LjU3MDYiIHN0cm9rZT0iIzNEOTBFMyIvPgo8L3N2Zz4K'/>
                    </div>
                    <Typography className={classes.title} >
                        Delegate {model.delegateInfo.username}
                    </Typography>
                    <Badge className={classes.badge} >
                        <Typography className={classes.top} >
                            TOP 10
                        </Typography>
                    </Badge>
                </div>
                <div className={classes.favoriteWrapper}>
                    <Button onClick={model.addToFavorites}>
                        <Typography className={classes.favorite} >
                            Add to favorites
                        </Typography>
                        <Icons.FavoriteBorder className={classes.favoriteIcon} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default withRouter(observer(PageTitle));
