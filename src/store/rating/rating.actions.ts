import {createAction, props} from '@ngrx/store';
import {TIndicatorDetailsRatingRequest} from '../../app/models/indicator.model';
import {TRating} from '../../app/models/rating.model';

export enum ERatingActions {
	getRatingRequest = '[Rating] Get Rating',
	getRatingSuccess = '[Rating] Get Rating Success',
	getRatingError = '[Rating] Get Rating Error'
}

export const getRating = createAction(
	ERatingActions.getRatingRequest,
	props<{data: TIndicatorDetailsRatingRequest}>()
);

export const setRating = createAction(
	ERatingActions.getRatingSuccess,
	props<{buttonId: number; rating: TRating[]}>()
);
