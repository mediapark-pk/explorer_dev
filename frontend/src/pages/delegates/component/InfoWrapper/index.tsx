import React from 'react';
import { useStyles } from 'src/pages/delegates/component/InfoWrapper/style';
import CommonInfo from 'src/pages/delegates/component/CommonInfo';
import RatingDiagram from 'src/app/component/chart/RatingDiagram';
import RatingMap from 'src/pages/delegates/component/RatingMap';
import RatingTable from 'src/pages/delegates/component/RatingTable';

interface IInfoWrapperProps {}

const InfoWrapper: React.FC<IInfoWrapperProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <CommonInfo />
            <RatingDiagram />
            <RatingTable />
            <RatingMap />
        </div>
    );
};

export default InfoWrapper;
