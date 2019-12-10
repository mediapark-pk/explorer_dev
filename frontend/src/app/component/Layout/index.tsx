import React, { ReactNode } from 'react';
import { useStyles } from 'src/app/component/Layout/styles';
import Header from 'src/app/component/Header';
import Footer from 'src/app/component/Footer';


interface ILayoutProps {
    children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    const classes = useStyles({});

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
