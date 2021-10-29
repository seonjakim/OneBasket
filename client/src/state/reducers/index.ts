import { combineReducers } from 'redux';
import { itemReducer } from './itemReducer';

const reducers = combineReducers({
  items: itemReducer,
});

export default reducers;
