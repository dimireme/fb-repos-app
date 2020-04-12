export type IRepo = {};

export type RepoState = {
  list: IRepo[];
  loading: boolean;
  error: string | null;
};

// ЗАПРОС СПИСКА РЕПОЗИТОРИЕВ
export const FETCH_REPOS_REQUEST = 'FETCH_REPOS_REQUEST';
export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const FETCH_REPOS_FAIL = 'FETCH_REPOS_FAIL';

interface FetchReposRequestAction {
  type: typeof FETCH_REPOS_REQUEST;
}

interface FetchReposSuccessAction {
  type: typeof FETCH_REPOS_SUCCESS;
  payload: IRepo[];
}

interface FetchReposFailAction {
  type: typeof FETCH_REPOS_FAIL;
}

export type ActionTypes =
  | FetchReposRequestAction
  | FetchReposSuccessAction
  | FetchReposFailAction;
