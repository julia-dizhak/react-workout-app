//import { values } from 'redux-form';

export const required = value =>
    value ? undefined : 'value is required';

export const minLength = value =>
    (value.length < 3) ? 'value must be at least 3 characters' : undefined;

export const maxLength = value =>
    (value.length > 256) ? 'value is too long' : undefined;

export const matchesPassword = (value, allValues)  =>
    (value === allValues.password) ? undefined : 'password must match';
    
export const asyncValidate = values => {
    const sleep = message => new Promise(resolve => setTimeout(resolve, message));
    return sleep(1000).then(() => {
        if ( ['Julia', 'andy', 'john', 'joel'].includes(values.username)) {
            return Promise.reject({
                username: 'username already taken'
            });
        }
    });
}    
             