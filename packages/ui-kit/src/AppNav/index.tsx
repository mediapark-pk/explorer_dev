import React, { ReactNode } from 'react';

interface IAppNavProps {
    children: ReactNode;
    className?: string;
}

export const AppNav: React.FC<IAppNavProps> = ({ children, className }) => {

    return (
        <div className={className}>
            {children}
        </div>
    )
};
