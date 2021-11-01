import { Dispatch } from 'redux';
import storeApi from '../../apis/storeApi';
import { ActionType } from '../action-types/index';

export const fetchItems = () => async (dispatch: Dispatch) => {
  const response = await fetch('http://localhost:3000/grocery.json');
  const result = await response.json();
  dispatch({
    type: ActionType.FETCH_ITEMS,
    payload: result,
  });
};

export const addItems = (post) => {
  return (dispatch) => {
    dispatch({
      type: ActionType.ADD_ITEMS,
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

export const setItems = (items) => {
  return {
    type: ActionType.GET_METHOD,
    payload: items,
  };
};

export const selectedItem = (item) => {
  return {
    type: ActionType.SELECTED_ITEM,
    payload: item,
  };
};
