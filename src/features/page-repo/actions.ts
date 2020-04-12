import { AppThunk } from '../../definitions/app';
import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAIL,
} from './types';

// ЗАПРОС СПИСКА РЕПОЗИТОРИЕВ
export const fetchRepoList = (username: string): AppThunk<void> => async (
  dispatch,
) => {
  dispatch({ type: FETCH_REPOS_REQUEST });
  dispatch({
    type: FETCH_REPOS_SUCCESS,
    payload: [],
  });
  dispatch({ type: FETCH_REPOS_FAIL });
};
