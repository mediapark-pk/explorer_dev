import React from 'react';
import { useStyles } from 'src/pages/delegates/component/RatingMap/component/MapPoint/style';
import { MapPointModel } from 'src/pages/delegates/component/RatingMap/component/MapPoint/model';
import { Location } from '@app/common';
import { useModel } from '@app/core';

interface IMapPointsProps {
    location: Location;
}

const MapPoints: React.FC<IMapPointsProps> = ({ location }) => {
    const classes = useStyles({});
    const model = useModel(MapPointModel);

    let coords = model.locationToCoords(location);

    return (
        <div 
            className={classes.root}
            style={{ top: coords.y, left: coords.x }}
        ></div>
    );
};

export default MapPoints;
