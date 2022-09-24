import {IDashboardState} from './dashboard.reducer';
import {IAppState} from '../app.state';
import {createSelector} from '@ngrx/store';
import {selectAppDashboard} from '../app.selectors';

export const getState = (state: IAppState) => state.dashboard;

export const selectDashboardSelected = createSelector(
	getState,
	(state: IDashboardState) => state.selected
);

export const selectDashboardPrevSelected = createSelector(
	getState,
	(state: IDashboardState) => state.prevSelected
);

export const selectAvailableTypes = createSelector(
	selectAppDashboard,
	(state: IDashboardState) => state.selected.availableTypes
);
