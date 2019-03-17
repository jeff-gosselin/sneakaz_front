import {combineReducers} from 'redux';
import {shopperReducer} from './reducer-shoppers';
import {sneakerReducer} from './reducer-sneakers';

const allReducers = combineReducers({
	shopper: shopperReducer,
	sneakers: sneakerReducer
});
export default allReducers
