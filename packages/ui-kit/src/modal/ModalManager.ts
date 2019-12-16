import React from 'react';
import { action, observable } from 'mobx';
import { ReactNode } from 'react';
import { v4 as uuid } from 'uuid';

export type ModalId = string;

export type ModalContextValue = {
    id: ModalId;
    close(): void;
};

export const ModalContext = React.createContext<ModalContextValue>(null);

export class ModalManager {

    @observable readonly modals: Set<ModalId>;

    private readonly contents: Map<ModalId, ReactNode>;

    constructor() {
        this.modals = new Set();
        this.contents = new Map();
    }

    getContentById(id: ModalId): ReactNode {
        return this.contents.get(id);
    }

    @action show(content: ReactNode): ModalId {
        const id = uuid();
        this.modals.add(id);
        this.contents.set(id, content);

        return id;
    }

    @action hide(id: ModalId) {
        this.modals.delete(id);
        this.contents.delete(id);
    }
}
