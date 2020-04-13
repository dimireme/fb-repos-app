import queryString from 'query-string';
import { AppThunk } from '../../definitions/app';
import { getApiUrl, getHeaders } from '../../utils/api';
import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAIL,
  SET_REPOS_PAGE,
  ActionTypes,
} from './types';
import { getPage } from './selectors';

const PAGE_SIZE = 10;
const ORG = 'facebook';

// ЗАПРОС СПИСКА РЕПОЗИТОРИЕВ
export const fetchRepoList = (search?: string): AppThunk<void> => async (
  dispatch,
  getState,
) => {
  dispatch({ type: FETCH_REPOS_REQUEST });
  const state = getState();
  const page = getPage(state);
  const headers = getHeaders();

  const q = search ? `${search}+org:${ORG}` : `org:${ORG}`;

  const qs = queryString.stringify({
    per_page: PAGE_SIZE,
    page,
    q,
  });

  const res = await fetch(getApiUrl(`/search/repositories?${qs}`), {
    headers,
  });
  const data = await res.json();

  if (res.status === 200) {
    dispatch({
      type: FETCH_REPOS_SUCCESS,
      payload: {
        list: data.items,
        total: Math.ceil(data.total_count / PAGE_SIZE),
      },
    });
  } else {
    dispatch({ type: FETCH_REPOS_FAIL, payload: data.message });
  }
};

export function setPage(page: number): ActionTypes {
  return {
    type: SET_REPOS_PAGE,
    payload: page,
  };
}
