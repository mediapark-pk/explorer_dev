import React from 'react';
import { observer } from 'mobx-react-lite';
import { useDI } from '@app/core';
import { useSnackbar } from 'notistack';
import { NotificationManager } from '../NotificationManager';

interface INotificationContainerProps {}

export const NotificationContainer: React.FC<INotificationContainerProps> = observer(({ }) => {
    const manager = useDI(NotificationManager);
    const { enqueueSnackbar } = useSnackbar();

    React.useEffect(() => {
        manager.notifications.forEach(item => {
            enqueueSnackbar(item.message, item.options);
            manager.remove(item.key);
        });
    }, [manager.notifications.size])


    return null;
});
