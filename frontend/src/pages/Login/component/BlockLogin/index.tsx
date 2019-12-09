import React from 'react';
import { useStyles } from 'src/pages/Login/component/BlockLogin/style';
import Data from 'src/pages/Login/component/Data';

interface IBlockLoginProps {
}

const BlockLogin: React.FC<IBlockLoginProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Data />
        </div>
    );
};

export default BlockLogin;



