import { singleton } from 'src/container';
import { OnInit, OnDestroy } from '@app/core';
import { observable, action } from 'mobx';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DelegateService } from 'src/common/service/DelegateService';
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
        try {
            this.isNoteSaving = true;
            this.isNoteSaved = false;
            await this.service.saveNoteById(this.mainPageModel.delegateId, noteText);
            this.isNoteSaved = true;
        } catch {
            this.isNoteSaved = false;
        } finally {
            this.isNoteSaving = false;
        }
    }

    onDestroy() {
        this.onNoteUpdate.complete();
    }
}
