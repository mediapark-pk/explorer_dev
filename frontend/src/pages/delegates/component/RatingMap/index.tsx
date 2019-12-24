import React from 'react';
import { useStyles } from 'src/pages/delegates/component/RatingMap/style';
import MapImage from 'src/pages/delegates/component/RatingMap/components/MapImage';
import MapPointsWrapper from 'src/pages/delegates/component/RatingMap/components/MapPointsWrapper';

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
