import {createReducer, on} from '@ngrx/store';
import * as CurrentDateActions from './current-date.actions';

export interface ICurrentDateState {
	[key: number]: {
		currentDate: string;
		mode: 'auto' | 'manual';
	};
}

export const initialState: ICurrentDateState = {};

export const currentDateReducer = createReducer(
	initialState,
	on(CurrentDateActions.initCurrentDate, (state, {type, buttonId, date}) => {
		console.log(type);
		//TODO "Mode: auto"

		return {
			...state, [buttonId]: {
				currentDate: date ? date : new Date().toISOString(),
				mode: 'auto'
			}
		};
	}),
	on(CurrentDateActions.setCurrentDate, (state, {type, buttonId, date}) => {
		console.log(type);
		return {
			...state, [buttonId]: {
				currentDate: date,
				mode: 'manual'
			}
		};
	})
);
