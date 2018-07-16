import React, { Component } from 'react';

import WorkoutTable from './components/WorkoutTable/';
import WorkoutForm from './components/WorkoutForm';

export default class Workout extends Component {
    submit = values => {
        window.alert(JSON.stringify(values, null, 4))
    }
    render() {
        return (
        <React.Fragment>
            <WorkoutForm onSubmit={this.submit} />
            <WorkoutTable />
            
        </React.Fragment>
        );
    }
}
