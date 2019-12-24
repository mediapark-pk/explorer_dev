import React from 'react';
import { useStyles } from 'src/pages/delegates/component/RatingMap/components/MapPoint/style';

interface IMapPointsProps {
    location: Location;
}

const MapPoints: React.FC<IMapPointsProps> = ({ location }) => {
    const classes = useStyles({});

    let coords = locationToCoords(location);

    return (
        <div 
            className={classes.root}
            style={{ top: coords.y, left: `${coords.x}%` }}
        ></div>
    );
};

export default MapPoints;

interface Location {
    lat: number;
    long: number;
}

function locationToCoords(location: Location) {
    let mapWidth    = 666;
    let mapHeight   = 403;

    let x = ((location.long + 180) / 360) * 90;
    let latRad = location.lat * 0.9 * Math.PI / 180;

    // get y value
    let mercN = Math.log(Math.tan((Math.PI / 4) + (latRad / 2)));
    let y = (mapHeight / 2) - ((mapWidth) * mercN / (2 * Math.PI));

    return { x, y: y - 30 };
}
