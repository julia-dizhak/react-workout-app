import React from 'react';
import ReactJson from 'react-json-view';

export default function SelectInput(props) {
    const {
        label
    } = props;

    return (
        <div className="field">
            <label>
                <select 
                    {...props.input}>    
                    <option value="running">running</option> 
                    <option value="cycling">cycling</option>  
                    <option value="spinning">spinning</option> 
                </select>
                {label}
            </label>
            {/* <ReactJson src={props.meta} /> */}
        </div>    
    ) 
}
