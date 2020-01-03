import React, { ReactNode } from 'react';
import { useStyles } from 'src/app/component/Layout/styles';
import Header from 'src/app/component/Header';
import Footer from 'src/app/component/Footer';
import { useHistory } from 'react-router';


interface ILayoutProps {
    children: ReactNode;
}

const onRouterAction = (location, action) => {
    if (action !== 'POP') {
        window.scrollTo(0, 0);
    }
};

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    const classes = useStyles({});
    const history = useHistory();

    React.useEffect(() => history.listen(onRouterAction), []);

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Header />
                <main className={classes.main} >
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
