import React from 'react';
import { useStyles } from 'src/pages/delegate/component/Picture2/style';
import Group41 from 'src/pages/delegate/component/Group41';

interface IPicture2Props {
}

const Picture2: React.FC<IPicture2Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Group41 />
        </div>
    );
};

export default Picture2;



