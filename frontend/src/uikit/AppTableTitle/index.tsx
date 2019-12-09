import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useStyles } from 'src/uikit/AppTableTitle/styles';
import { DataProviderContext } from 'src/core/data';

interface IAppTableHeadProps {
    className?: string;
    children: ReactNode;
}

const AppTableTitle: React.FC<IAppTableHeadProps> = ({ className, children }) => {
    const classes = useStyles({});
    const dataProvider = React.useContext(DataProviderContext);

    return (
        <div className={classNames(classes.root, className)}>
            {children}
        </div>
    );
};

export default observer(AppTableTitle);
