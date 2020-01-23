import React from 'react';
import { useStyles } from 'src/pages/delegates/component/RatingMap/component/MapImage/style';

interface IMapImageProps {}

const MapImage: React.FC<IMapImageProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.wrapper} >
                <img className={classes.map} src='/public/img/mercator.png' />
            </div>
        </div>
    );
};

export default MapImage;



