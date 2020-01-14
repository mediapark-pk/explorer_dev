import React, { useState, useEffect } from 'react';
import { useStyles } from 'src/pages/delegate/component/CommentsWrapper/component/Notes/style';
import { TextField } from '@material-ui/core';
import MainPageModel from 'src/pages/delegate/component/MainPage/model';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';

interface INotesProps {}

const MAX_SYMBOLS = 480;
const TEXTAREA_ROWS = 10;

export const Notes: React.FC<INotesProps> = observer(({ }) => {
    const classes = useStyles({});
    const model = useDI(MainPageModel);
    const [count, setCount] = useState(0);
    const [noteText, setNoteText] = useState('');

    const onChange = function (event: React.ChangeEvent<HTMLTextAreaElement>) {
        let value = event.target.value;
        
        setNoteText(value);
        setCount(value.length);
        
        model.isNoteSaved = false;
        model.saveNoteDebounce(value);
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
                <span className={classes.counter}>{count} / {MAX_SYMBOLS}</span>
                <span className={classes.saving}>
                    {model.isNoteSaving && 'Saving...'}
                    {model.isNoteSaved && 'Saved'}
                </span>
            </div>
        </div>
    );
});
