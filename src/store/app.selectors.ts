import {createSelector} from '@ngrx/store';
import {IAppState} from './app.state';

export const getState = (state: IAppState) => state;

export const selectIndicatorsPageState = createSelector(
	getState,
	(state) => ({
		dashboard: {
			selected: state.dashboard.selected?.id || 9, // TODO Убрать когда будет полное приложение,
		},
		directions: {
			currentDirection: state.directions.currentDirection,
			directionsList: state.directions.directionsList,
		},
		period: state.periods.find(
			({buttonId: id}) => Number(id) === Number(state.dashboard.selected?.id || 9)
		),  // TODO Убрать когда будет полное приложение,
		organization: state.organizations.currentOrg[state.dashboard.selected?.id || 9]
	})
);

export const selectOrgsModal = createSelector(
	getState,
	(state) => ({
		buttonId: state.dashboard.selected?.id,
		availableTypes: state.dashboard.selected?.availableTypes,
		// list: state.organizations.commonList
	})
);
