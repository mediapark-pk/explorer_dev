import React from 'react';
import { useStyles } from 'src/pages/Registration/component/RegistrationPage/style';
import Data1 from 'src/pages/Registration/component/Data1';

interface IRegistrationPageProps {
}

const RegistrationPage: React.FC<IRegistrationPageProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Data1 />
            </div>
        </div>
    );
};

export default RegistrationPage;



