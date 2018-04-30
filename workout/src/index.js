import React from 'react';
import { render } from 'react-dom';

import './index.css';
import Workout from './App';
import registerServiceWorker from './registerServiceWorker';

let destination =  document.getElementById("root");
render(<Workout />, destination);

registerServiceWorker();

if (module.hot) {
    module.hot.accept();
}