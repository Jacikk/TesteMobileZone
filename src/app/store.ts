import { configureStore, ThunkAction, Action, createStore, combineReducers } from '@reduxjs/toolkit';
import { changeDestaque1 } from './reducers';

export const store = createStore(changeDestaque1)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
