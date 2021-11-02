import { combineReducers } from 'redux';
import { formReducer } from './formReducer';
import { groceryReducer } from './groceryReducer';

const reducers = combineReducers({
  groceries: groceryReducer,
  forms: formReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
