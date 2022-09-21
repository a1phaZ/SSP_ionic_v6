import {createAction, props} from '@ngrx/store';
import {TIndicatorDetails} from '../../app/models/indicator.model';

export enum EDetailsActions {
	getDetailsRequest = '[Details] Get Details',
	getDetailsSuccess = '[Details] Get Details Success',
	getDetailsError = '[Details] Get Details Error',
}

export const getDetails = createAction(
	EDetailsActions.getDetailsRequest,
	props<{data: any}>()
);

export const setDetails = createAction(
	EDetailsActions.getDetailsSuccess,
	props<{buttonId: number; details: TIndicatorDetails}>()
);
