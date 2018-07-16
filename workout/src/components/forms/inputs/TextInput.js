import React, { Component } from 'react'

export default function TextInput(props) {
    const {
        label,
        type
    } = props;

    return (
        <div className="field">
            <label>
                {label}
                <input 
                    {...props.input}
                    type={type}
                /> 
            </label>
            
        </div>    
    ) 
}
