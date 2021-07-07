import { cardAction, cardContent, DispatchType, } from './types';

export enum actionTypes {
    CHANGE='CHANGE'
}

export function change(cardContent: cardContent) {
  const action: cardAction = {
    type: actionTypes.CHANGE,
    content: cardContent
  };

  return (dispatch: DispatchType) => {dispatch(action)};
}