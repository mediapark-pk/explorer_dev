import React from 'react';
import { useStyles } from 'src/pages/delegate/component/AddToFavorites/style';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import AddToFavoritesModel from 'src/pages/delegate/component/AddToFavorites/model';

interface IAddToFavoritesProps { }

export const AddToFavorites: React.FC<IAddToFavoritesProps> = observer(({ }) => {
    const classes = useStyles({});
    const model = useDI(AddToFavoritesModel);

    return model.favoriteDelegateInfo.favorite ? (
        <Button
            onClick={model.addToFavorites}
            endIcon={<FavoriteIcon className={classes.favoriteIcon} />}
        >
            <Typography className={classes.favorite} >
                In favorites
            </Typography>
        </Button>
    ) : (
        <Button
            onClick={model.addToFavorites}
            endIcon={<FavoriteBorderIcon className={classes.favoriteIcon} />}
        >
            <Typography className={classes.favorite} >
                Add to favorites
            </Typography>
        </Button>
    );
});
