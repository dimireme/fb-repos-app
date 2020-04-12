import { Selector } from 'reselect';
import { AppState } from '../../definitions/app';
import { IRepo } from './types';

export const getPage: Selector<AppState, number> = (state) => state.repo.page;
export const getHasNextPage: Selector<AppState, boolean> = (state) =>
  state.repo.hasNextPage;
export const getRepos: Selector<AppState, IRepo[]> = (state) => state.repo.list;
