import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import thunk from 'redux-thunk'

// Creates store
import {createStore, applyMiddleware} from 'redux';
import {userLoginReducer} from './Redux/reducers'

// Allows React to ackowledge store
import {Provider} from 'react-redux';
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(userLoginReducer, applyMiddleware(thunk)) // eventually change to a rootReducer to combine reducers
console.log(store.getState());


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
