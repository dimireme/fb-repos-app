import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import repoReducer from '../features/page-repo/reducer';

export const rootReducer = combineReducers({
  repo: repoReducer,
});

export default function configureStore() {
  const middlewares =
    process.env.NODE_ENV === 'development'
      ? applyMiddleware(thunk, logger)
      : applyMiddleware(thunk);
  return createStore(rootReducer, middlewares);
}
