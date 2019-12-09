import React from 'react';
import { useStyles } from 'src/pages/delegate/component/Graph/style';
import FromTo from 'src/pages/delegate/component/FromTo';
import Picture1 from 'src/pages/delegate/component/Picture1';
import Group210 from 'src/pages/delegate/component/Group210';

interface IGraphProps {
    className?: string;
}

const Graph: React.FC<IGraphProps> = ({ className, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <FromTo />
            </div>
            <div className={classes.div1} >
                <Picture1 />
                <Group210 />
            </div>
        </div>
    );
};

export default Graph;



