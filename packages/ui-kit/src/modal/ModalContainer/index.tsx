import React from 'react';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import { ModalManager, ModalContext } from '../ModalManager';
import Dialog from '@material-ui/core/Dialog';

interface IModalContainerProps {
}

const ModalContainer: React.FC<IModalContainerProps> = ({ }) => {
    const manager = useDI(ModalManager);

    return (
        <>
            {[...manager.modals].map(id => {
                const context = {
                    id,
                    close: () => manager.hide(id)
                };
                
                return (
                    <ModalContext.Provider value={context} key={id}>
                        <Dialog open={true} onClose={context.close} maxWidth={false} scroll={'body'}>
                            {manager.getContentById(id)}
                        </Dialog>
                    </ModalContext.Provider>
                );
            })}
        </>
    );
};

export default observer(ModalContainer);



