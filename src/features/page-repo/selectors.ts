import { Selector } from 'reselect';
import { AppState } from '../../definitions/app';
import { IRepo } from './types';

export const getPage: Selector<AppState, number> = (state) => state.repo.page;
export const getTotal: Selector<AppState, number> = (state) => state.repo.total;
export const getRepos: Selector<AppState, IRepo[]> = (state) => state.repo.list;
export const getLoading: Selector<AppState, boolean> = (state) =>
  state.repo.loading;
