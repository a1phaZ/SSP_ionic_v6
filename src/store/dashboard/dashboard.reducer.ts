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
	on(DashboardActions.selectButton, (state, {item}) => {
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
);