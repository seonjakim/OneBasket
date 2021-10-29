import { ActionType } from '../action-types/index';

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
