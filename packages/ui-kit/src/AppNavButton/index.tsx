import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom'

interface IHeaderProps {
    children: ReactNode;
    to: string;
    className?: string;
    classes?: {
        root?: string;
        activeClassName?: string;
    };
}

const AppNavButton: React.FC<IHeaderProps> = ({ children, to, className, classes = {} }) => {
    return (
        <NavLink className={classNames(classes.root, className)} to={to} activeClassName={classes.activeClassName}>
            {children}
        </NavLink>
    );
};

export default AppNavButton;
