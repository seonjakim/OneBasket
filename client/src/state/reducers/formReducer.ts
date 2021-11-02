import { ActionType } from '../action-types/index';

const initialState = {
  identity: null,
  duration: null,
  gender: null,
  reason: '',
  plan: '',

  name: '',
  birthday: '',
  email: '',
  phoneNumber: '',
  address: '',
};

export const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.INPUT_CONTENTS:
      const { event, value } = payload;
      return { ...state, [event.target.id]: value };
    case ActionType.DROP_CONTENTS:
      return state;
    default:
      return state;
  }
};
