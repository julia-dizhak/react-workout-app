export const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'name is required';
    } else if (values.name.length < 3) {
        errors.name = 'name must be at least 3 characters long';
    }

    if (!values.surname) {
        errors.surname = 'surname is required';
    } else if (values.surname.length < 3) {
        errors.surname = 'surname must be at least 3 characters long';
    }

    return errors;
}