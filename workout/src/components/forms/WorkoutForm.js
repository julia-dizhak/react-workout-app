import React, { Component } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import { discounts } from './Discounts';
import capitalize from 'capitalize';
// import { validate } from './validation-sync';
import { 
    required, 
    maxLength, 
    minLength, 
    matchesPassword,
    asyncValidate 
} from './validation-field-level';
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
                    label="name"
                    validate={[required]}
                />

                <Field 
                    name="surname"
                    component={TextInput}
                    type="text"
                    label="surname"
                    validate={[required, minLength]}
                    normalize={capitalize}
                />

                <Field 
                    name="username"
                    component={TextInput}
                    type="text"
                    label="username"
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

                <FieldArray name="discountCodes" component={discounts} />

                <div className="button-wrap">
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
    asyncValidate,
    asyncBlurFields: ['username']
})(WorkoutForm);

export default WorkoutForm;