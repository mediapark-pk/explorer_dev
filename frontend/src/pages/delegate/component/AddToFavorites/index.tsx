import React from 'react';
import { useStyles } from 'src/pages/delegate/component/AddToFavorites/style';
import { Typography, Button } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import MainPageModel from 'src/pages/delegate/component/MainPage/model';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';

interface IAddToFavoritesProps { }

export const AddToFavorites: React.FC<IAddToFavoritesProps> = observer(({ }) => {
    const classes = useStyles({});
    const model = useDI(MainPageModel);

    return model.favoriteDelegateInfo.favorite ? (
        <Button
            onClick={model.addToFavorites}
            endIcon={<Icons.Favorite className={classes.favoriteIcon} />}
        >
            <Typography className={classes.favorite} >
                In favorites
            </Typography>
        </Button>
    ) : (
        <Button
            onClick={model.addToFavorites}
            endIcon={<Icons.FavoriteBorder className={classes.favoriteIcon} />}
        >
            <Typography className={classes.favorite} >
                Add to favorites
            </Typography>
        </Button>
    );
});
