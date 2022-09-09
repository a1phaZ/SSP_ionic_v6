import {IDashboardState} from './dashboard.reducer';
import {IAppState} from '../app.state';
import {createSelector} from '@ngrx/store';

export const getState = (state: IAppState) => state.dashboard;

export const selectDashboardSelected = createSelector(
	getState,
	(state: IDashboardState) => state.selected
);

export const selectDashboardPrevSelected = createSelector(
	getState,
	(state: IDashboardState) => state.prevSelected
);
