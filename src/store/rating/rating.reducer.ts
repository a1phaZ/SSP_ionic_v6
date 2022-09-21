import {TRating} from '../../app/models/rating.model';
import {createReducer, on} from '@ngrx/store';
import * as RatingActions from './rating.actions';

export interface IRatingState {
	[key: number]: TRating[];
}

export const initialState: IRatingState = {};

export const ratingReducer = createReducer(
	initialState,
	on(RatingActions.setRating, (state, {type, buttonId, rating}) => {
		console.log(type);
		return {
			...state,
			[buttonId]: rating,
		};
	})
);
