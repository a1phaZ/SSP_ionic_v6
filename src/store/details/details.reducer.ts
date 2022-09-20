import {TIndicatorDetails} from '../../app/models/indicator.model';
import {createReducer, on} from '@ngrx/store';
import * as DetailsActions from './details.actions';

export interface IDetailsState {
	[key: number]: {
		details: TIndicatorDetails;
	};
}

export const initialState: IDetailsState = {};

export const detailsReducer = createReducer(
	initialState,
	on(DetailsActions.setDetails, (state, {type, buttonId, details}) => {
		console.log(type);
		return {
			...state,
			[buttonId]: {
				details
			}
		};
	})
);
