import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux'; 
import {reducer as formReducer} from 'redux-form';

import './index.css';
import Workout from './App';
import registerServiceWorker from './registerServiceWorker';

const reducers = {
    form: formReducer
};

const reducer = combineReducers(reducers);

let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

const destination =  document.getElementById("root");
render(<Provider store={store}><Workout /></Provider>, destination);

registerServiceWorker();

if (module.hot) {
    module.hot.accept();
}