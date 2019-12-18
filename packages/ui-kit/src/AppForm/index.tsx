import React, { ReactNode } from 'react';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { validate } from 'class-validator'
import { APP_FORM_SUBMIT } from './decorators';

interface IAppFormProps {
    children: ReactNode;
    className?: string;
    model: any;
    onSubmit?(): void;
}

export type AppFormContextValue<T> = {
    model: T;
    errors: {
        [key: string]: Array<string>
    }
} 

export const AppFormContext = React.createContext<AppFormContextValue<any>>(null);

export const AppForm: React.FC<IAppFormProps> = ({ children, className, model, onSubmit }) => {
    const [errors, setErrors] = React.useState({});

    const onValidate = async (event: React.FormEvent) => {
        event.stopPropagation();
        event.preventDefault();

        const data = await validate(model);

        const value = data.reduce((errors, item) => {
            errors[item.property] = Object.values(item.constraints);
            return errors;
        }, {});

        setErrors(value);

        const submitMethod = Reflect.getMetadata(APP_FORM_SUBMIT, model, 'method');
        const onSubmitMethod = model[submitMethod]
            ? model[submitMethod].bind(model)
            : onSubmit;

        if (data.length === 0) {
            onSubmitMethod();
        }
    }

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <AppFormContext.Provider value={{errors, model}}>
                <form className={className} onSubmit={onValidate} noValidate>
                    {children}
                </form>
            </AppFormContext.Provider>
        </MuiPickersUtilsProvider>
    );
};
