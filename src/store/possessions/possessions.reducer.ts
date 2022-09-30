import {createReducer, on} from '@ngrx/store';
import * as PossessionsActions from './possessions.actions';
import {TAccordionItemCommon} from '../../app/models/accordion.model';

export interface IPossessionState {
	list: TAccordionItemCommon[];
	details: any; // TODO add type
}

export const initialState: IPossessionState = {
	list: [],
	details: null
};

export const possessionsReducer = createReducer(
	initialState,
	on(PossessionsActions.getPossessionsListSuccess, (state, {type, list}) => {
		console.log(type);
		return {
			...state,
			list
		};
	}),
	on(PossessionsActions.getPossessionDetailsSuccess, (state, {type, details}) => {
		console.log(type);
		return {
			...state,
			details
		};
	}),
);
