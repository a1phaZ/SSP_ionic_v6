import {createReducer, on} from '@ngrx/store';
import * as CurrentDateActions from './current-date.actions';

export interface ICurrentDateState {
	[key: number]: {
		currentDate: string;
		mode: 'auto' | 'manual';
	};
}

export const initialState: ICurrentDateState = {};

export const dateReducer = () => (state, {type, buttonId, date}) => {
	console.log(type);
	if (splitDate(state[buttonId].currentDate) === splitDate(date)) {
		return state;
	}
	console.log(state[buttonId].currentDate, date, state[buttonId].currentDate === date);
	return {
		...state, [buttonId]: {
			currentDate: date,
			mode: 'manual'
		}
	};
};

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
	on(CurrentDateActions.setCurrentDate, dateReducer()),
	on(CurrentDateActions.setCurrentDateByPeriod, dateReducer())
);

const splitDate = (date: string): string => date.split('T')[0];
