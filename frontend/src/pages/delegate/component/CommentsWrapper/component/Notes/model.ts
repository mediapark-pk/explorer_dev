import { singleton } from 'src/container';
import { OnInit, OnDestroy } from '@app/core';
import { observable, action } from 'mobx';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import DelegateService from 'src/pages/delegate/service/DelegateService';
import { useModel } from '@app/core';
import MainPageModel from 'src/pages/delegate/component/MainPage/model';

const AUTOSAVE_DEBOUNCE_INTERVAL = 500;

@singleton
export default class NotesModel implements OnInit, OnDestroy {

    @observable isNoteSaving: boolean = false;
    @observable isNoteSaved: boolean = false;

    private mainPageModel = useModel(MainPageModel);

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
        await this.service.saveNote(this.mainPageModel.delegateId, noteText);
        this.isNoteSaving = false;
        this.isNoteSaved = true;
    }

    onDestroy() {
        this.onNoteUpdate.complete();
    }
}
