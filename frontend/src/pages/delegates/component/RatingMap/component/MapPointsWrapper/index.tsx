import React from 'react';
import { useStyles } from 'src/pages/delegates/component/RatingMap/component/MapPointsWrapper/style';
import MapPoint from 'src/pages/delegates/component/RatingMap/component/MapPoint';
import RatingMapModel from 'src/pages/delegates/component/RatingMap/model';
import { VMDelegate } from 'src/pages/delegates/model/VMDelegate';
import { observer } from 'mobx-react-lite';
import { useDI } from '@app/core';

interface IMapPointsProps {}

const MapPoints: React.FC<IMapPointsProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(RatingMapModel);
    
    return (
        <div className={classes.root} >
            {model.delegates.map((item: VMDelegate, index: number) => (
                <MapPoint key={item.publicKey} location={item.location} />
            ))}
        </div>
    );
};

export default observer(MapPoints);
