import React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { AppFormContext } from '../AppForm';

export const AppTextField: React.FC<TextFieldProps> = (props) => {
    const [errors, setErrors] = React.useState([]);
    const form = React.useContext(AppFormContext);
    const name = props.name;

    const onChange = event => {
        setErrors([]);
        form.model[name] = event.target.value;
    }

    React.useEffect(() => {
        setErrors(form.errors[name] || []);
    }, [form.errors[name]])

    return (
        <TextField
            onChange={onChange}
            error={Boolean(errors.length)}
            helperText={errors.join()}
            value={form.model[name]}
            {...props}
        />
    );
};
