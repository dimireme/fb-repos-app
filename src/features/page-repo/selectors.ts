import { Selector } from 'reselect';
import { AppState } from '../../definitions/app';

export const getPage: Selector<AppState, number> = (state) => state.repo.page;
