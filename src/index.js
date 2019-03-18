import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './Redux/reducers/combinedReducer'
import {BrowserRouter} from 'react-router-dom';

// const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();



const store = createStore(allReducers, applyMiddleware(thunk));
// console.log("from index.js", store.getState());


ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
