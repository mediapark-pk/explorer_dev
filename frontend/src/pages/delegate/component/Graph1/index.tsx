import React from 'react';
import { useStyles } from 'src/pages/delegate/component/Graph1/style';
import FromTo1 from 'src/pages/delegate/component/FromTo1';
import Picture4 from 'src/pages/delegate/component/Picture4';
import Group211 from 'src/pages/delegate/component/Group211';

interface IGraph1Props {
}

const Graph1: React.FC<IGraph1Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <FromTo1 />
            </div>
            <div className={classes.div1} >
                <Picture4 />
                <Group211 />
            </div>
        </div>
    );
};

export default Graph1;



