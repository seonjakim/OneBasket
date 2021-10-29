import { Dispatch } from 'redux';
import storeApi from '../../apis/storeApi';
import { ActionType } from '../action-types/index';

export const fetchItems = () => async (dispatch: Dispatch) => {
  const response = await storeApi.get('/products');
  dispatch({
    type: ActionType.FETCH_ITEMS,
    payload: response.data,
  });
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
