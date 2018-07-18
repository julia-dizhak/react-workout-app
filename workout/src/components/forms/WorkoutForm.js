import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
// import { validate } from './validation-sync';
import { required, maxLength, minLength, matchesPassword } from './validation-field-level';
import './workout-form.css';

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
                    label="your name"
                    validate={[required]}
                />

                <Field 
                    name="surname"
                    component={TextInput}
                    type="text"
                    label="your surname"
                    validate={[required, minLength, maxLength]}
                />

                <Field 
                    name="workout-type"
                    component={SelectInput}
                    label="choose a workout"   
                />  

                <Field 
                    name="date"
                    component={TextInput}
                    type="date"
                    label="today"
                />  
        
                {/* <div>
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
                </div>  */}
                
                <Field 
                    name="password"
                    component={TextInput}
                    type="password"
                    label="Passowrd"
                    validate={[required]}
                />
                <Field 
                    name="confirmPassword"
                    component={TextInput}
                    type="text"
                    label="Confirm password"
                    validate={[required, matchesPassword]}
                />


                <Field
                    name="newsletter"
                    component={TextInput}
                    type="checkbox"
                    label="Sign up to Newsletter?"
                />

                <div>
                    <button type="submit">save</button>
                </div>    
            </form>
        )
    }
}

// decorator
WorkoutForm = reduxForm({
    form: 'workout',
    //validate
})(WorkoutForm);

export default WorkoutForm;