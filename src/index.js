import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './Redux/reducers/combinedReducer'

// const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();



const store = createStore(allReducers, applyMiddleware(thunk));
console.log(store.getState());


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
