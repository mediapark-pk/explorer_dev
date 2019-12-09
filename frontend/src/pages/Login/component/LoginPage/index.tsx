import React from 'react';
import { useStyles } from 'src/pages/Login/component/LoginPage/style';
import BlockLogin from 'src/pages/Login/component/BlockLogin';

interface ILoginPageProps {
}

const LoginPage: React.FC<ILoginPageProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <BlockLogin />
        </div>
    );
};

export default LoginPage;



