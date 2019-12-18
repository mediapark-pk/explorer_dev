import React from 'react';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { AppFormContext } from '../AppForm';

export const AppCheckbox: React.FC<CheckboxProps> = (props) => {
    const form = React.useContext(AppFormContext);
    const name = props.name;

    const onChange = event => {
        form.model[name] = event.target.checked;
    }

    return (
        <Checkbox
            onChange={onChange}
            value={form.model[name]}
            {...props}
        />
    );
};
