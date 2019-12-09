import React from 'react';
import { useStyles } from 'src/pages/delegate/component/FromTo/style';
import Picture from 'src/pages/delegate/component/Picture';

interface IFromToProps {
}

const FromTo: React.FC<IFromToProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Picture />
        </div>
    );
};

export default FromTo;



