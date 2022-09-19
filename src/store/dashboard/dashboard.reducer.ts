import {createReducer, on} from '@ngrx/store';
import * as DashboardActions from './dashboard.actions';
import {TDashboardItem} from '../../app/models/dashboard.model';

export interface IDashboardState {
	selected: TDashboardItem | null;
	prevSelected: TDashboardItem | null;
}

export const initialState: IDashboardState = {
	selected: null,
	prevSelected: null,
};

export const dashboardReducer = createReducer(
	initialState,
	on(DashboardActions.selectButton, (state, {type, item}) => {
		console.log(type);
		if (!state.selected) {
			return {...state, selected: item};
		}
		if (state.selected.id === item.id) {
			return {...state};
		}
		return {
			prevSelected: state.selected,
			selected: item
		};
	}),
	on(DashboardActions.dashboardBack, (state, {type}) => {
		console.log(type);
		return {
			selected: state.prevSelected ? state.prevSelected : null,
			prevSelected: null
		};
	})
);
