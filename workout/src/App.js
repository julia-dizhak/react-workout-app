import React, { Component } from 'react';

import WorkoutTable from './components/WorkoutTable/';
import WorkoutFormContainer from './components/WorkoutFormContainer';

export default class Workout extends Component {
    render() {
        return (
        <React.Fragment>
            <WorkoutFormContainer />
            <WorkoutTable />
        </React.Fragment>
        );
    }
}
