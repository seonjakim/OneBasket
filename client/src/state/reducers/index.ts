import { combineReducers } from 'redux';
import { formReducer } from './formReducer';
import { itemReducer } from './itemReducer';

const reducers = combineReducers({
  items: itemReducer,
  forms: formReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
