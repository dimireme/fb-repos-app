import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAIL,
  RepoState,
  ActionTypes,
} from './types';

// Type-safe initialState!
const defaultState: RepoState = {
  list: [],
  loading: false,
  error: null,
};

export default (state = defaultState, action: ActionTypes): RepoState => {
  switch (action.type) {
    case FETCH_REPOS_REQUEST:
    case FETCH_REPOS_SUCCESS:
    case FETCH_REPOS_FAIL:
    default:
      return state;
  }
};
