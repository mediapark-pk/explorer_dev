import React from 'react';
import { useStyles } from 'src/pages/Forget/component/ForgetPage/style';
import Data2 from 'src/pages/Forget/component/Data2';

interface IForgetPageProps {
}

const ForgetPage: React.FC<IForgetPageProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Data2 />
            </div>
        </div>
    );
};

export default ForgetPage;



