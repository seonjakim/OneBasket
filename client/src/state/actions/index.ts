import { ActionType } from '../action-types/index';

type Grocery = {
  image: string;
  title: string;
  location: string;
  content: string;
};

interface AddGroceryAction {
  type: ActionType.ADD_GROCERY;
  payload: Grocery;
}

export type Action = AddGroceryAction;
