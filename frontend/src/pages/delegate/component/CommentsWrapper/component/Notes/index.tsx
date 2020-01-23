import React, { useState, useEffect } from 'react';
import { useStyles } from 'src/pages/delegate/component/CommentsWrapper/component/Notes/style';
import NotesModel from 'src/pages/delegate/component/CommentsWrapper/component/Notes/model';
import TextField from '@material-ui/core/TextField';
import { useModel } from '@app/core';
import { observer } from 'mobx-react-lite';

interface INotesProps {}

const MAX_SYMBOLS = 480;
const TEXTAREA_ROWS = 10;

export const Notes: React.FC<INotesProps> = observer(({ }) => {
    const classes = useStyles({});
    const model = useModel(NotesModel);
    const [noteText, setNoteText] = useState('');

    const onChange = function (event: React.ChangeEvent<HTMLTextAreaElement>) {
        let value = event.target.value;
        
        setNoteText(value);
        
        model.isNoteSaved = false;
        model.onNoteUpdate.next(value);
    };

    return (
        <div className={classes.root} >
            <TextField
                className={classes.textField}
                id='filled-multiline-static'
                multiline
                rows={TEXTAREA_ROWS}
                fullWidth={true}
                value={noteText}
                placeholder='Your private note here'
                onChange={onChange}
            />
            <div className={classes.bottomWrapper}>
                <span className={classes.counter}>{noteText.length} / {MAX_SYMBOLS}</span>
                <span className={classes.saving}>
                    {model.isNoteSaving && 'Saving...'}
                    {model.isNoteSaved && 'Saved'}
                </span>
            </div>
        </div>
    );
});
