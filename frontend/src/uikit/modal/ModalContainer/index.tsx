import React from 'react';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import ModalManager, { ModalContext } from 'src/uikit/modal/ModalManager';
import Dialog from '@material-ui/core/Dialog';

interface IModalContainerProps {
}

const ModalContainer: React.FC<IModalContainerProps> = ({ }) => {
    const modalManager = useDI(ModalManager);

    return (
        <>
            {[...modalManager.modals].map(id => {
                
                const context = {
                    id,
                    close: () => modalManager.hide(id)
                };
                
                return (
                    <ModalContext.Provider value={context} key={id}>
                        <Dialog open={true} onClose={context.close} maxWidth={false} scroll={'body'}>
                            {modalManager.getContentById(id)}
                        </Dialog>
                    </ModalContext.Provider>
                );
            })}
        </>
    );
};

export default observer(ModalContainer);



