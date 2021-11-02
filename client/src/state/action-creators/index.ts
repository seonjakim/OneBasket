import { Dispatch } from 'redux';
import { ActionType } from '../action-types/index';
import { Action } from '../actions/index';

export const getApiCall = () => async (dispatch: Dispatch) => {
  const response = await fetch('http://localhost:3000/grocery.json');
  const result = await response.json();
  dispatch({
    type: ActionType.API_GET,
    payload: result,
  });
};

export const addGrocery = (post) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_GROCERY,
      payload: post,
    });
  };
};

export const inputContentChange = (event) => {
  return (dispatch) => {
    dispatch({
      type: ActionType.INPUT_CONTENTS,
      payload: event,
    });
  };
};

export const dropDownSelect = (event) => {
  return (dispatch) => {
    dispatch({
      type: ActionType.DROP_CONTENTS,
      payload: event,
    });
  };
};
