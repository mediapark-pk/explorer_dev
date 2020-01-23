import { singleton } from 'src/container';
import { Location } from '@app/common';

@singleton
export class MapPointModel {
    locationToCoords(location: Location) {
        let mapWidth    = 611;
        let mapHeight   = 423;
        let mapHeightCropped = 98;
    
        let x = (location.long + 180) * (mapWidth / 360) - 25;

        let latRad = location.lat * Math.PI / 180;    
        let mercN = Math.log(Math.tan((Math.PI / 4) + (latRad / 2)));
        let y = ((mapHeight + mapHeightCropped) / 2) - (mapWidth * mercN / (2 * Math.PI));

        return { x, y };
    }
}
