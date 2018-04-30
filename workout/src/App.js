import React, { Component } from 'react';

import ExcelTable from './components/ExcelTable/';

export default class Workout extends Component {
  render() {
    return (
      <React.Fragment>
        <ExcelTable />
      </React.Fragment>
    );
  }
}
