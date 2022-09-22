import {TIndicator} from '../../app/models/indicator.model';
import {createReducer, on} from '@ngrx/store';
import * as InfluenceActions from './influence.actions';

export interface IInfluenceState {
	[key: number]: TIndicator[];
}

export const initialState: IInfluenceState = {};

export const influenceReducer = createReducer(
	initialState,
	on(InfluenceActions.setInfluence, (state, {type, data}) => {
		console.log(type);
		return {
			...state,
			[data.id]: [...data.list],
		};
	})
);
