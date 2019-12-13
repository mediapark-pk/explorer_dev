import React, { ReactNode } from 'react';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

interface IAppFormProps {
    children: ReactNode;
    className?: string;

    onSubmit?(): void;
}

export const AppForm: React.FC<IAppFormProps> = ({ children, className, onSubmit }) => {
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <form className={className} onSubmit={onSubmit}>
                {children}
            </form>
        </MuiPickersUtilsProvider>
    );
};

