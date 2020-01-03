import React from 'react';
import { useStyles } from 'src/pages/delegate/component/InfoWrapper/style';
import CommonInfo from 'src/pages/delegate/component/CommonInfo';
import Chart from 'src/pages/delegate/component/Chart';

interface IInfoWrapperProps {}

const InfoWrapper: React.FC<IInfoWrapperProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <CommonInfo/>
            <Chart />
        </div>
    );
};

export default InfoWrapper;
