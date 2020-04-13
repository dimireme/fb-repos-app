export type IOwner = {
  id: number;
  login: string;
  avatar_url: string;
};

export type IRepo = {
  id: number;
  name: string;
  description: string;
  open_issues_count: number;
  owner: IOwner;
};

export type RepoState = {
  list: IRepo[];
  page: number;
  loading: boolean;
  total: number;
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
  payload: {
    list: IRepo[];
    total: number;
  };
}

interface FetchReposFailAction {
  type: typeof FETCH_REPOS_FAIL;
  payload: string;
}

// СМЕНА ТЕКУЩЕЙ АКТИВНОЙ СТРАНИЦЫ
export const SET_REPOS_PAGE = 'SET_REPOS_PAGE';

interface SetReposPageAction {
  type: typeof SET_REPOS_PAGE;
  payload: number;
}

export type ActionTypes =
  | FetchReposRequestAction
  | FetchReposSuccessAction
  | FetchReposFailAction
  | SetReposPageAction;
