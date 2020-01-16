import { singleton } from 'src/container';
import { OnInit, OnDestroy } from '@app/core';
import { observable, action } from 'mobx';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import DelegateService from 'src/pages/delegate/service/DelegateService';
    
const AUTOSAVE_DEBOUNCE_INTERVAL = 500;

@singleton
export default class NotesModel implements OnInit, OnDestroy {

    @observable isNoteSaving: boolean = false;
    @observable isNoteSaved: boolean = false;

    delegateId: string;
    
    onNoteUpdate: Subject<string> = new Subject();

    constructor(
        private readonly service: DelegateService,
    ) { }
    
    onInit() {
        this.onNoteUpdate
            .pipe(
                debounceTime(AUTOSAVE_DEBOUNCE_INTERVAL)
            )
            .subscribe(
                this.saveNote
            );
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

    onDestroy() {
        this.onNoteUpdate.complete();
    }
}
