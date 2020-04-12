import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { rootReducer } from '../store';

export type AppState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export type AppDispatch = ThunkDispatch<AppState, unknown, Action>;

export type AppActionResponse = { type: string; payload?: any };
