import React from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useStyles } from 'src/uikit/AppTableBody/styles';
import TableBody from '@material-ui/core/TableBody';
import { DataProviderContext } from 'src/core/data';

interface IAppTableBodyProps {
    className?: string;
    children: React.FC;
}

const AppTableBody: React.FC<IAppTableBodyProps> = ({ className, children }) => {
    const classes = useStyles({});
    const dataProvider = React.useContext(DataProviderContext);

    return (
        <TableBody className={className}>
            {dataProvider.repository.data.map((item, index) => children(item, index))}
        </TableBody>
    );
};

export default observer(AppTableBody);
