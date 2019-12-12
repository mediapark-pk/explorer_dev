import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { useStyles } from 'packages/ui-kit/AppTable/styles';
import { DataProvider, DataProviderContext } from 'src/core/data';
import { useWebkitForceScroll } from 'src/app/component/Theme/theme';

interface IAppTableProps {
    dataProvider: DataProvider<any>;
    children: ReactNode;
    className?: string;
}

const AppTable: React.FC<IAppTableProps> = ({ dataProvider, children, className }) => {
    const classes = { ...useStyles({}), ...useWebkitForceScroll({}) };

    return (
        <div className={classNames(classes.root, className)}>
            <DataProviderContext.Provider value={dataProvider}>
                {children}
            </DataProviderContext.Provider>
        </div>
    );
};

export default AppTable;
