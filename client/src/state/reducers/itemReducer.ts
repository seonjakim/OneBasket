import { ActionType } from '../action-types/index';

const init = {
  item: [],
};

export const itemReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_ITEMS:
      return { ...state, item: payload };
    default:
      return state;
  }
};
