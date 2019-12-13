import React from 'react';
import { observer } from 'mobx-react-lite';
import { useDI } from '@app/core';
import { useSnackbar } from 'notistack';
import { NotificationManager } from '../NotificationManager';

interface INotificationContainerProps {}

const NotificationContainer: React.FC<INotificationContainerProps> = ({ }) => {
    const manager = useDI(NotificationManager);
    const { enqueueSnackbar } = useSnackbar();

    manager.notifications.forEach(item => {
        enqueueSnackbar(item.message, item.options);
        manager.remove(item.key);
    });

    return null;
};

export default observer(NotificationContainer);
