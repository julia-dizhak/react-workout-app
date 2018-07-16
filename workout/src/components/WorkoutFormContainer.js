import React, {Component} from 'react';

import WorkoutForm from './forms/WorkoutForm';

export default class WorkoutFormContainer extends Component {
    submit = values => {
        window.alert(JSON.stringify(values, null, 4))
    }
    
    getInitialValues() {
        return {
            name: 'Julia',
            workout: 'running',
            newsletter: false
        }
    }

    render() {
        return (
            <WorkoutForm 
                onSubmit={this.submit}
                initialValues={this.getInitialValues()} 
            />
        );
    }
}
