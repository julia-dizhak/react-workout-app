import React from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let destination =  document.getElementById("root");
render(<App />, destination);

registerServiceWorker();

if (module.hot) {
    module.hot.accept();
}