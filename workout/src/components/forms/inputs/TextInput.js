import React from 'react';
//import ReactJson from 'react-json-view';
import className from 'classnames';

export const getValidityClassName = meta => {
    if (meta.active) {
        return '';
    }
    if (meta.touched && meta.invalid) {
        return 'invalid';
    }
    if (meta.touched && meta.valid) {
        return 'valid';
    }
}

export default function TextInput(props) {
    const {
        label,
        input,
        meta,
        type
    } = props;

    return (
        <div className={className(
            'custom-input-container',
            {'flex-row-reverse': type === 'checkbox'},
            {dirty: meta.dirty},
            getValidityClassName(meta)
        )}>
            <label>
                <input 
                    {...input}
                    type={type}
                /> 
                {label}
            </label>
            {
                (meta.error && meta.touched && !meta.active) && (
                    <div className="feedback-text error-text">{meta.error}</div>
                )}
            {/* <ReactJson src={props.meta} /> */}
        </div>    
    ) 
}
