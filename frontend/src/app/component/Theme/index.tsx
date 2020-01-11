import React, { ReactNode } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { THEME } from 'src/app/component/Theme/theme';
import StylesProvider from '@material-ui/styles/StylesProvider';

interface ILayoutProps {
    children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={THEME}>
                {children}
            </MuiThemeProvider>
        </StylesProvider>
    );
};

export default Layout;
