import React from 'react';
import { useStyles } from 'src/pages/delegates/component/RatingMap/style';
import MapImage from 'src/pages/delegates/component/RatingMap/component/MapImage';
import MapPointsWrapper from 'src/pages/delegates/component/RatingMap/component/MapPointsWrapper';

interface IRatingMapProps {}

const RatingMap: React.FC<IRatingMapProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <MapImage />
            <MapPointsWrapper/>
        </div>
    );
};

export default RatingMap;
