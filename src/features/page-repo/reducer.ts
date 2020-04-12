import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAIL,
  SET_REPOS_PAGE,
  RepoState,
  ActionTypes,
} from './types';

// Type-safe initialState!
const defaultState: RepoState = {
  list: [],
  page: 1,
  loading: false,
  hasNextPage: false,
  error: null,
};

export default (state = defaultState, action: ActionTypes): RepoState => {
  switch (action.type) {
    case FETCH_REPOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload.list,
        hasNextPage: action.payload.hasNextPage,
      };
    case FETCH_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_REPOS_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};
