import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form';
import TextInput from './forms/inputs/TextInput';

class WorkoutForm extends Component {
  render() {
        const {handleSubmit} = this.props;
        return (
            <form 
                className="todo workout-form"
                onSubmit={handleSubmit}>
                <Field 
                    name="name"
                    component={TextInput}
                    type="text"
                    label="name"
                    />
                {/* <Field 
                        name="workout"
                        component="input"
                        type="text" 
                    />    */}
                <div>
                    <label>choose a workout</label>
                    <Field 
                        name="option"
                        component="select">    
                        <option />
                        <option value="running">running</option> 
                        <option value="cycling">cycling</option>  
                        <option value="spinning">spinning</option>  
                    </Field>    
                </div>
                <div>
                    <label>date (now, today)</label>
                    <Field 
                        name="workout"
                        component="input"
                        type="text" 
                    />    
                </div> 
                <div>
                    <label>duration</label>
                    <Field 
                        name="workout"
                        component="input"
                        type="text" 
                    />    
                </div> 
                <div>
                    <label>distance</label>
                    <Field 
                        name="test"
                        component="input"
                        type="text" 
                    />    
                </div> 
                <div>
                    <button type="submit">save</button>
                </div>    
            </form>
        )
    }
}

WorkoutForm = reduxForm({
    form: 'workout-form'
})(WorkoutForm);

export default WorkoutForm;