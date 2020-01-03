import React from 'react';
import { useStyles } from 'src/pages/delegates/component/RatingMap/component/MapPointsWrapper/style';
import MapPoint from 'src/pages/delegates/component/RatingMap/component/MapPoint';
import RatingMapModel from 'src/pages/delegates/component/RatingMap/model';
import { Delegate } from 'src/core/model/Delegate';
import { observer } from 'mobx-react-lite';
import { useDI } from '@app/core';

interface IMapPointsProps {}

const MapPoints: React.FC<IMapPointsProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(RatingMapModel);
    
    return (
        <div className={classes.root} >
            {model.delegates.map((item: Delegate, index: number) => (
                <MapPoint key={index} location={item.location} />
            ))}
        </div>
    );
};

export default observer(MapPoints);
