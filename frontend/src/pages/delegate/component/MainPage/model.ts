import copy from 'copy-to-clipboard';
import { action, observable, reaction } from 'mobx';
import { singleton } from 'src/container';
import DelegateService from 'src/pages/delegate/service/DelegateService';
import { VMDelegateSummary } from 'src/pages/delegate/model/VMDelegateSummary';
import { RawDelegateSummary } from '@app/common';
import { Subscription } from 'rxjs';
import { OnInit, OnDestroy } from '@app/core';
import { filter } from 'rxjs/operators';
import debounce from 'lodash.debounce';

// TODO: Put in a proper place
interface VMFavoriteDelegateInfo {
    favorite: boolean;
    notifyOnIncoming: boolean;
    notifyOnOutgoing: boolean;
}

const AUTOSAVE_DEBOUNCE_INTERVAL = 500;

@singleton
export default class CommonInfoModel implements OnInit, OnDestroy {

    @observable isLoading: boolean;
    @observable isNoteSaving: boolean = false;
    @observable isNoteSaved: boolean = false;

    // TODO: Put in a proper place
    @observable favoriteDelegateInfo: VMFavoriteDelegateInfo = {
        favorite: false,
        notifyOnIncoming: false,
        notifyOnOutgoing: false,
    };

    @observable delegateInfo: VMDelegateSummary = new VMDelegateSummary({
        address: '',
        blockHeight: 0,
        consensus: true,
        ddkVersion: '',
        feeReward: 0,
        forgedBlocks: 0,
        location: '',
        missedBlocks: 0,
        peers: 0,
        votes: 0,
        username: '',
    });

    delegateId: string;

    private onDelegateUpdate: Subscription;

    constructor(
        private readonly service: DelegateService,
    ) { }

    onInit() {
        this.onDelegateUpdate = this.service.onDelegateUpdate()
            .pipe(
                filter((info: RawDelegateSummary) => info.address === this.delegateInfo.address)
            )
            .subscribe((info: RawDelegateSummary) => {
                this.delegateInfo = new VMDelegateSummary(info);
            });
    }

    @action async loadInfo(id: string) {
        this.isLoading = true;
        this.delegateId = id;

        try {
            this.delegateInfo = new VMDelegateSummary(
                await this.service.getDelegateSummary(this.delegateId)
            );
        } finally {
            this.isLoading = false;
        }
    }

    @action.bound
    copyAddress() {
        copy(this.delegateInfo.address);
    }
    
    @action.bound
    async addToFavorites() {
        // MOCK logic
        this.favoriteDelegateInfo.favorite = !this.favoriteDelegateInfo.favorite;
        await this.service.addToFavorites(this.delegateId);
    }
    
    @action.bound
    async saveNote(noteText: string) {
        this.isNoteSaving = true;
        this.isNoteSaved = false;
        // MOCK logic
        await this.service.saveNote(this.delegateId, noteText);
        this.isNoteSaving = false;
        // TODO: Set 'true' on success only
        this.isNoteSaved = true;
    }

    @action.bound
    saveNoteDebounce = debounce(this.saveNote, AUTOSAVE_DEBOUNCE_INTERVAL);

    onDestroy() {
        this.onDelegateUpdate.unsubscribe();
    }
}
