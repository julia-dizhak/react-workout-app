import React from 'react';
import ReactJson from 'react-json-view';

export default function TextInput(props) {
    const {
        label,
        input,
        meta,
        type
    } = props;

    return (
        <div className="field">
            <label>
                {label}
                <input 
                    {...input}
                    type={type}
                /> 
            </label>
            {
                (meta.error && meta.touched) && (
                    <div className="error">{meta.error}</div>
                )}
            {/* <ReactJson src={props.meta} /> */}
        </div>    
    ) 
}
