export const required = value =>
    value ? undefined : 'value is required';

export const minLength = value =>
    (value.length < 3) ? 'value must be at least 3 characters' : undefined;

export const maxLength = value =>
    (value.length > 256) ? 'value is too long' : undefined;
             