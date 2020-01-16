import React from 'react';
import { useStyles } from 'src/pages/delegate/component/AddToFavorites/style';
import { Typography, Button } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { useDI, useModel } from '@app/core';
import { observer } from 'mobx-react-lite';
import AddToFavoritesModel from 'src/pages/delegate/component/AddToFavorites/model';

interface IAddToFavoritesProps { }

export const AddToFavorites: React.FC<IAddToFavoritesProps> = observer(({ }) => {
    const classes = useStyles({});
    const model = useModel(AddToFavoritesModel);

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
