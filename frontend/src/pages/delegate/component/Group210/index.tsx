import React from 'react';
import { useStyles } from 'src/pages/delegate/component/Group210/style';
import From from 'src/pages/delegate/component/From';
import To from 'src/pages/delegate/component/To';

interface IGroup210Props {
}

const Group210: React.FC<IGroup210Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <From />
            <To />
        </div>
    );
};

export default Group210;



