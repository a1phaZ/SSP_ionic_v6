import {createAction, props} from '@ngrx/store';
import {TIndicatorInfluenceRequest} from '../../app/models/indicator.model';

export enum EInfluenceActions {
	getInfluenceRequest = '[Influence] Get Influence',
	getInfluenceSuccess = '[Influence] Get Influence Success',
	getInfluenceError = '[Influence] Get Influence Error',
}

export const getInfluence = createAction(
	EInfluenceActions.getInfluenceRequest,
	props<{data: TIndicatorInfluenceRequest}>()
);

export const setInfluence = createAction(
	EInfluenceActions.getInfluenceSuccess,
	props<{data: any}>()
);
