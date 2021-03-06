import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';


import '../assets/stylesheets/application.scss';

import flatsReducer from './reducers/flats_reducer.js';
import selectedFlatReducer from './reducers/selected_flat_reducer.js';

const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer
});

const middlewares = applyMiddleware(logger, reduxPromise);

import App from './components/app.jsx';

const root = document.getElementById('root');
ReactDOM.render(<Provider store={createStore(reducers, {}, middlewares)}> <App /> </Provider>, root);

