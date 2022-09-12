import {IAppState} from './app.state';
import {createSelector} from '@ngrx/store';

export const getState = (state: IAppState) => ({
	dashboard: {
		selected: state.dashboard.selected?.id || 9 // TODO Убрать когда будет полное приложение
	},
	directions: {
		currentDirection: state.directions.currentDirection,
		directionsList: state.directions.directionsList,
	},
	periods: state.periods,
});

export const selectIndicatorsPageState = createSelector(
	getState,
	(state) => ({
			dashboard: state.dashboard,
			directions: state.directions,
			period: state.periods.find(({buttonId: id}) => Number(id) === Number(state.dashboard.selected))
		})
);
